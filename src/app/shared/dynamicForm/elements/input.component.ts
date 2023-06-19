import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Field } from '../field.config';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,InputTextModule],
  template: ` <form  style="margin : 0.5rem !important" [formGroup]="form">
    <div class="input-wrapper">
    <label *ngIf="!field.label" [htmlFor]="field.name" style="color: transparent!important;">field</label>
    <label *ngIf="field.label" [htmlFor]="field.name">{{ field.label }}</label>
      <input
        pInputText
        [id]="field.disabled ? 'disabled-input' : field.name"
        [type]="field.type"
        #field.name
        [disabled]="field.disabled"
        [class]="field.name"
        [placeholder]="field.placeholder"
        [name]="field.name"
        [formControlName]="field.name"
      />
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
    `
      .input-wrapper {
        display: flex;
        flex-direction: column;

        input {
          /* border: 1px solid ; */
          border-radius: 11px !important;
          background-color: transparent;
        }
  
        label {
          font-size: 12px !important;
  
               color: #2e3c66 !important;
          font-family: tommy_Regular !important;
        }
      }
      .error-text {
        font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
    `,
  ],
})
export class InputComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
