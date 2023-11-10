import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayAttributeBindingComponent } from './oneway-attribute-binding.component';

describe('OnewayAttributeBindingComponent', () => {
  let component: OnewayAttributeBindingComponent;
  let fixture: ComponentFixture<OnewayAttributeBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayAttributeBindingComponent]
    });
    fixture = TestBed.createComponent(OnewayAttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
