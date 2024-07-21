import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review202407Component } from './review202407.component';

describe('Review202407Component', () => {
  let component: Review202407Component;
  let fixture: ComponentFixture<Review202407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Review202407Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review202407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
