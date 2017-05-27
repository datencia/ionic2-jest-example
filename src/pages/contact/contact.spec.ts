import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from './contact';

describe('ContactPage', () => {

  let fixture: ComponentFixture<ContactPage>;
  let instance: ContactPage;

  const navControllerStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        ContactPage
      ],
      providers: [
        {provide: NavController, useValue: navControllerStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the contact page', () => {
    expect(instance).toBeTruthy();
  });

  it('should show a title', () => {
    const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(h2.textContent).toContain('Contact');
  });

});
