import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { Field } from '../field.config';

@Component({
  selector: 'app-numberbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputNumberModule],
  template: ` <form  style="margin : 0.5rem !important" [formGroup]="form">
    <div class="input-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-inputNumber 
        inputId="integeronly" 
        formControlName="value"
        [id]="field.disabled ? 'disabled-input' : field.name"
        [disabled]="field.disabled"
        [class]="field.name"
        [formControlName]="field.name">
    </p-inputNumber>
      <div *ngIf="(form.controls[field.name].touched || form.controls[field.name].dirty) && form.controls[field.name].invalid">
        <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
          <small class="p-error error-text" *ngSwitchCase="'required'" >Champ Obligatoire</small>
          <small class="p-error error-text" *ngSwitchCase="'minlength'" >minimum {{field.rules?.minLength}}</small>
          <small class="p-error error-text" *ngSwitchCase="'email'" >Invalid email format</small>
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `::ng-deep 
      .input-wrapper {
        display: flex;
        flex-direction: column;
   
        .p-inputnumber  {
          border: 1px solid #B3mmB3B3;
          min-width: 100%;
          border-radius: 11px !important;
          background-color: var(--white) !important;
          span {
            width: 100% !important;
            border : none !important;
          }
        }
        label {
          font-size: 12px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
        }
        .p-inputtext:enabled:hover {
    border-color:  #B3B3B3;
}
      }
      .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
      
    `,
  ],
})
export class NumberboxComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
