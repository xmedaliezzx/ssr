import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Field } from '../field.config';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RadioButtonModule],
  template: ` <form [formGroup]="form">
    <div class="radio-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>

      <div
        class="radio-elements"
        [ngStyle]="{ display: 'flex', 'flex-direction': field.flex?.direction }"
      >
        <div
          *ngFor="let option of field.options"
          [ngStyle]="{
            display: 'flex',
            'justify-content': field.flex?.justifyContent,
            'align-items': field.flex?.alignItems
          }"
        >
          <p-radioButton
            [name]="field.name"
            [value]="option"
            [formControlName]="field.name"
          ></p-radioButton>
          <label [for]="option">{{
            option
          }}</label>
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `
      ::ng-deep 
        .radio-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          label {
            font-size: 14px !important;            color: #2e3c66 !important;
            font-family: tommy_Regular !important;
            margin-left:5px;
            margin-right: 5px;
          }
          .radio-elements {
            margin: 0.5rem 0 0.5rem 0.5rem;
          }
          .p-radiobutton .p-radiobutton-box {
            /* border-color: #1b8793 !important; */
            border-width: 2px !important;
          }
          .p-radiobutton-icon {
            background: #1b8793 !important;
          }
        }
      
    `,
  ],
})
export class RadioComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
