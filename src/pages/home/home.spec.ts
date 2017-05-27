import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from './home';

describe('HomePage', () => {

  let fixture: ComponentFixture<HomePage>;
  let instance: HomePage;

  const navControllerStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        HomePage
      ],
      providers: [
        {provide: NavController, useValue: navControllerStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the home page', () => {
    expect(instance).toBeTruthy();
  });

  it('should show a title', () => {
    const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(h2.textContent).toContain('Home');
  });

  it('should show a greeting', () => {
    const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2.textContent).toContain('Welcome to Ionic!');
  });

  it('should show the last updated date', () => {
    fixture.detectChanges();
    const p: HTMLParagraphElement[] = fixture.debugElement.queryAll(By.css('p')).map(e => e.nativeElement);
    expect(p[0].textContent).toContain('Last updated: 05/22/2017');
  })

});
