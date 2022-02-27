import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityPostsTabComponent } from './user-activity-posts-tab.component';

describe('UserActivityPostsTabComponent', () => {
  let component: UserActivityPostsTabComponent;
  let fixture: ComponentFixture<UserActivityPostsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivityPostsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityPostsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
