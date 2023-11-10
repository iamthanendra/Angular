import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayEventBindingComponent } from './oneway-event-binding.component';

describe('OnewayEventBindingComponent', () => {
  let component: OnewayEventBindingComponent;
  let fixture: ComponentFixture<OnewayEventBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayEventBindingComponent]
    });
    fixture = TestBed.createComponent(OnewayEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
