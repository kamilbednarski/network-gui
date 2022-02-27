import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityLikesTabComponent } from './user-activity-likes-tab.component';

describe('UserActivityLikesTabComponent', () => {
  let component: UserActivityLikesTabComponent;
  let fixture: ComponentFixture<UserActivityLikesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivityLikesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityLikesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
