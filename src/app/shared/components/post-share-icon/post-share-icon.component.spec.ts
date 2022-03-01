import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShareIconComponent } from './post-share-icon.component';

describe('PostShareIconComponent', () => {
  let component: PostShareIconComponent;
  let fixture: ComponentFixture<PostShareIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostShareIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
