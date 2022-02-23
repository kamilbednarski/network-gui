import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDateDetailsComponent } from './post-date-details.component';

describe('PostDateDetailsComponent', () => {
  let component: PostDateDetailsComponent;
  let fixture: ComponentFixture<PostDateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
