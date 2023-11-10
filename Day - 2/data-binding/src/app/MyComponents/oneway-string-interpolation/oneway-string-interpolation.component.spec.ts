import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayStringInterpolationComponent } from './oneway-string-interpolation.component';

describe('OnewayStringInterpolationComponent', () => {
  let component: OnewayStringInterpolationComponent;
  let fixture: ComponentFixture<OnewayStringInterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayStringInterpolationComponent]
    });
    fixture = TestBed.createComponent(OnewayStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
