import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTaskComponent } from './second-task.component';

describe('SecondTaskComponent', () => {
  let component: SecondTaskComponent;
  let fixture: ComponentFixture<SecondTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondTaskComponent]
    });
    fixture = TestBed.createComponent(SecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
