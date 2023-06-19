import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Field } from '../field.config';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextareaModule],
  template: ` <form style="margin : 0.5rem !important" [formGroup]="form">
    <div class="input-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>

      <textarea
        rows="5"
        cols="8"
        pInputTextarea
        [disabled]="field.disabled"
        [class]="field.name"
        [placeholder]="field.placeholder"
        [name]="field.name"
        [formControlName]="field.name"
      ></textarea>
      <div *ngIf="(form.controls[field.name].touched || form.controls[field.name].dirty) && form.controls[field.name].invalid">
        <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
          <small class="p-error error-text" *ngSwitchCase="'required'" >Champ Obligatoire</small>
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `
      .input-wrapper {
        margin: 5px 0px 5px 0px;
        font-size: 12px;
        font-family: tommy_Regular;
        color: #2e3c66;
        letter-spacing: 0.17px;
      }
      .title {
        color: #ff0000;
      }
      
      label {
        font-size: 12px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
        }
      textarea  {
          border: 1px solid #B3B3B3;
          border-radius: 11px !important;
          background-color: transparent;
        }
      .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
    `,
  ],
})
export class TextareaComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
