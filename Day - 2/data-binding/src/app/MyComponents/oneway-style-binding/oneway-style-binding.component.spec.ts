import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayStyleBindingComponent } from './oneway-style-binding.component';

describe('OnewayStyleBindingComponent', () => {
  let component: OnewayStyleBindingComponent;
  let fixture: ComponentFixture<OnewayStyleBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayStyleBindingComponent]
    });
    fixture = TestBed.createComponent(OnewayStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
