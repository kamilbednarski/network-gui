import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeButtonPostDetailsComponent } from './like-button-post-details.component';

describe('LikeButtonPostDetailsComponent', () => {
  let component: LikeButtonPostDetailsComponent;
  let fixture: ComponentFixture<LikeButtonPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeButtonPostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeButtonPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
