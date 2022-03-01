import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIconsComponent } from './post-icons.component';

describe('PostIconsComponent', () => {
  let component: PostIconsComponent;
  let fixture: ComponentFixture<PostIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
