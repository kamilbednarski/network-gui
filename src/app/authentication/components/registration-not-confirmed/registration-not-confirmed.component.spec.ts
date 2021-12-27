import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNotConfirmedComponent } from './registration-not-confirmed.component';

describe('RegistrationNotConfirmedComponent', () => {
  let component: RegistrationNotConfirmedComponent;
  let fixture: ComponentFixture<RegistrationNotConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationNotConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationNotConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
