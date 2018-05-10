import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { Alert, AlertController } from 'ionic-angular';

import { AboutPage } from './about';

describe('AboutPage', () => {

  let fixture: ComponentFixture<AboutPage>;
  let instance: AboutPage;

  let alert: Alert = <Alert>{
    present: (): Promise<any> => Promise.resolve(),
    dismiss: (): Promise<any> => Promise.resolve()
  };

  const alertCtrlStub = {
    create: (options: any): Alert => alert
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        AboutPage
      ],
      providers: [
        {provide: AlertController, useValue: alertCtrlStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the about page', () => {
    expect(instance).toBeTruthy();
  });

  it('should show a title', () => {
    const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(h2.textContent).toContain('About');
  });

  it('should show a button to open an alert', () => {
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.textContent).toBe('Show Alert');
  });

  it('should show an alert dialog when the alert button is clicked', inject([AlertController], (alertCtrl: AlertController) => {
    jest.spyOn(alertCtrl, 'create');
    jest.spyOn(alert, 'present');

    const button: DebugElement = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    
    expect(alertCtrl.create).toHaveBeenCalledWith({buttons: ['Dismiss'], subTitle: '10% of battery remaining', title: 'Low battery'});
    expect(alert.present).toHaveBeenCalled();
  }));

});
