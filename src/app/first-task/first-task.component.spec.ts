import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTaskComponent } from './first-task.component';

describe('FirstTaskComponent', () => {
  let component: FirstTaskComponent;
  let fixture: ComponentFixture<FirstTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTaskComponent]
    });
    fixture = TestBed.createComponent(FirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
