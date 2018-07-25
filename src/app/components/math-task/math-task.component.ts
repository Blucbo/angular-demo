import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-math-task',
  templateUrl: './math-task.component.html',
  styleUrls: ['./math-task.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MathTaskComponent),
      multi: true
    }
  ],
})
export class MathTaskComponent implements ControlValueAccessor {
  value: number;

  writeValue(value: any | number): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => {};

  registerOnTouched() {}

  check(): void {
    const result = this.value === 36;
    this.propagateChange(result);
  }

}
