import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLikeIconComponent } from './post-like-icon.component';

describe('PostLikeIconComponent', () => {
  let component: PostLikeIconComponent;
  let fixture: ComponentFixture<PostLikeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLikeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
