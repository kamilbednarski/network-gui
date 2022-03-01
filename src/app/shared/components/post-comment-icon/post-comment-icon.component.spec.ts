import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentIconComponent } from './post-comment-icon.component';

describe('PostCommentIconComponent', () => {
  let component: PostCommentIconComponent;
  let fixture: ComponentFixture<PostCommentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCommentIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
