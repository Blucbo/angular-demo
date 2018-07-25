import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTaskComponent } from './math-task.component';

describe('MathTaskComponent', () => {
  let component: MathTaskComponent;
  let fixture: ComponentFixture<MathTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
