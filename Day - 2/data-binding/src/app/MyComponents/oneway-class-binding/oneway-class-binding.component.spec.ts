import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayClassBindingComponent } from './oneway-class-binding.component';

describe('OnewayClassBindingComponent', () => {
  let component: OnewayClassBindingComponent;
  let fixture: ComponentFixture<OnewayClassBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayClassBindingComponent]
    });
    fixture = TestBed.createComponent(OnewayClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
