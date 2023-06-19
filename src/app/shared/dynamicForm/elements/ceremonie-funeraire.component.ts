import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Field } from '../field.config';

@Component({
  selector: 'app-ceremonie-funeraire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CalendarModule],
  template: ` <form style="margin : 0.5rem !important" [formGroup]="form">
    <div class="timepicker-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-calendar
        [formControlName]="field.name"
        [showIcon]="true"
        [showWeek]="true"
        [showTime]="false"
        [showButtonBar]="false"
        [readonlyInput]="true"
        selectionMode="range" 
        [numberOfMonths]= "field.numberOfMonths || 1"
        [placeholder]="field.placeholder || ''"
        [showOnFocus]="false"
        [timeOnly]="false"
        [icon]="'pi pi-calendar-plus'"
        [styleClass]="'timepicker-bg-icon'"
      ></p-calendar>
      <div *ngIf="(form.controls[field.name].touched || form.controls[field.name].dirty) && form.controls[field.name].invalid">
        <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
          <small class="p-error error-text" *ngSwitchCase="'required'" >Champ Obligatoire</small>
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `
    ::ng-deep .timepicker-wrapper {
        display: flex;
        flex-direction: column;

 
  
        .label {
          font-size: 12px !important;
          color: #2e3c66 !important;
          background-color:red;
          font-family: tommy_Regular !important;
        }
        .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
        .timepicker-bg-icon {
          width: 100% !important;
          max-width: 590px;
          input {
            border-right: none !important;
           // border: 1px solid #ced4da;
            border: 1px solid #B3B3B3;
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
          button {
            background: transparent !important;
            color: #B3B3B3;
            border-radius: 0px 11px 11px 0px !important;
            border-color: #B3B3B3 !important;
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
export class CeremonieFuneraireComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;

  ngOnChanges(changes: SimpleChanges) {
  }
}
