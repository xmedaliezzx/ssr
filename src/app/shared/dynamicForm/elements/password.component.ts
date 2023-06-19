import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Field } from '../field.config';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    CommonModule,
    PasswordModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
  ],
  template: ` <form style="margin : 0.5rem !important" [formGroup]="form">
    <div class="input-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-password
        [toggleMask]="true"
        [feedback]="false"
        [formControlName]="field.name"
      ></p-password>
      <div
        *ngIf="
          (form.controls[field.name].touched ||
            form.controls[field.name].dirty) &&
          form.controls[field.name].invalid
        "
      >
        <div
          *ngFor="let error of form.get(field.name)?.errors | keyvalue"
          [ngSwitch]="error.key"
        >
          <small class="p-error error-text" *ngSwitchCase="'required'"
            >Champ Obligatoire</small
          >
          <small class="p-error error-text" *ngSwitchCase="'minlength'"
            >minimum {{ field.rules?.minLength }}</small
          >
          <small class="p-error error-text" *ngSwitchCase="'email'"
            >Invalid email format</small
          >
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `
      .input-wrapper {
        display: flex;
        flex-direction: column;

        /* margin: 1rem; */
        input {
          border: 1px solid #b3b3b3;
          border-radius: 11px !important;
          background-color: transparent;
        }

        label {
          font-size: 16px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
        }
        .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
        ::ng-deep {
          .p-password {
            position: relative;
            display: inline-flex;
            width: 100%;
          }
        }
      }
    `,
  ],
})
export class PasswordComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
