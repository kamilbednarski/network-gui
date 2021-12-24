import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationToConfirmComponent } from './registration-to-confirm.component';

describe('RegistrationToConfirmComponent', () => {
  let component: RegistrationToConfirmComponent;
  let fixture: ComponentFixture<RegistrationToConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationToConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationToConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
