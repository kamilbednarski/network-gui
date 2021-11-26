import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormLogoComponent } from './auth-form-logo.component';

describe('AuthFormLogoComponent', () => {
  let component: AuthFormLogoComponent;
  let fixture: ComponentFixture<AuthFormLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFormLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
