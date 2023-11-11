import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStyleComponent } from './test-style.component';

describe('TestStyleComponent', () => {
  let component: TestStyleComponent;
  let fixture: ComponentFixture<TestStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestStyleComponent]
    });
    fixture = TestBed.createComponent(TestStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
