import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Field } from '../field.config';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CalendarModule],
  template: ` <form  style="margin : 0.5rem !important" [formGroup]="form" >
    <div class="timepicker-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-calendar
        [formControlName]="field.name"
        [showIcon]="true"
        [showTime]="true"
        [showButtonBar]="false"
        [placeholder]="'select time'"
        [showOnFocus]="false"
        [timeOnly]="true"
        [icon]="'pi pi-clock'"
        [styleClass]="'timepicker-bg-icon'"
      ></p-calendar>
      <div *ngIf="(form.controls[field.name].touched || form.controls[field.name].dirty) && form.controls[field.name].invalid">
        <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
          <small class="p-error" *ngSwitchCase="'required'" >Champ Obligatoire</small>
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `
      .timepicker-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 1rem; */
        p-calendar {
          /* margin: 0.5rem 0 0.5rem 0; */
        }
      }
      ::ng-deep {
        .timepicker-bg-icon {
          width: 100% !important;
          input {
            border-right: none !important;
            border: 1px solid #ced4da;
            border-right: 0;
          border-radius: 11px 0px 0px 11px !important;
          background-color: transparent;
            &:hover {
              border-color: #ced4da !important;
            }
            &:focus {
              border-color: #ced4da !important;
            }
          }
          
        label {
          font-size: 12px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
        }
          button {
            background: transparent !important;
            color: #ced4da;
            border-radius: 0px 11px 11px 0px !important;
            border-color: #ced4da !important;
            border-left: none !important;
            &:hover {
              color: black !important;
            }
          }
        }
      }
    `,
  ],
})
export class TimepickerComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
