import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Field } from '../field.config';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxModule],
  template: `<form style="margin : 0.5rem !important" [formGroup]="form">
    <div class="checkbox-wrapper">
      <br />
      <p-checkbox
        [name]="field.name"
        [value]="field.value"
        (onChange)="onChange($event)"
      ></p-checkbox>
      <label [for]="field.name" style="padding-left: 0.5rem;">
        <span [innerHTML]="field.label"></span>
      </label>
    </div>
  </form> `,
  styles: [
    ` ::ng-deep .checkbox-wrapper{
     
        label {
          font-size: 14px !important;
          color: #2e3c66 !important;
          font-family: tommy_Medium !important;
        }
        .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
        .checkbox-wrapper {
          .p-checkbox .p-checkbox-box {
            border-color: #2e3c66 !important;
            border-width: 1px !important;
            width: 20px !important;
          }
          .p-checkbox .p-checkbox-box.p-highlight {
            background: #1b8793 !important;
            border-color: transparent !important;
          }
        }
      }
    
    `,
  ],
})
export class CheckboxComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
  onChange(event: any) {
    event.checked.length
      ? this.form.controls[this.field.name].setValue(this.field.successValue)
      : this.form.controls[this.field.name].setValue(this.field.failValue);
  }
}
