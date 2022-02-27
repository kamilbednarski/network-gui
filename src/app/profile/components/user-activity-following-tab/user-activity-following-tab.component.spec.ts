import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityFollowingTabComponent } from './user-activity-following-tab.component';

describe('UserActivityFollowingTabComponent', () => {
  let component: UserActivityFollowingTabComponent;
  let fixture: ComponentFixture<UserActivityFollowingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivityFollowingTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityFollowingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
