import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayPropertyBindingComponent } from './oneway-property-binding.component';

describe('OnewayPropertyBindingComponent', () => {
  let component: OnewayPropertyBindingComponent;
  let fixture: ComponentFixture<OnewayPropertyBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayPropertyBindingComponent]
    });
    fixture = TestBed.createComponent(OnewayPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
