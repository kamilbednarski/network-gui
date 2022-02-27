import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityFollowersTabComponent } from './user-activity-followers-tab.component';

describe('UserActivityFollowersTabComponent', () => {
  let component: UserActivityFollowersTabComponent;
  let fixture: ComponentFixture<UserActivityFollowersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivityFollowersTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityFollowersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
