import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review202406Component } from './review202406.component';

describe('Review202406Component', () => {
  let component: Review202406Component;
  let fixture: ComponentFixture<Review202406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Review202406Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review202406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
