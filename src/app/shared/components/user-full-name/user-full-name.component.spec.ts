import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFullNameComponent } from './user-full-name.component';

describe('UserFullNameComponent', () => {
  let component: UserFullNameComponent;
  let fixture: ComponentFixture<UserFullNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFullNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFullNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
