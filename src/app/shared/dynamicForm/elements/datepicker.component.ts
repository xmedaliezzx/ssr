import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Field } from '../field.config';

@Component({
  selector: 'app-datepicker',
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
          <small class="p-error error-text" *ngSwitchCase="'minlength'" >minimum {{field.rules?.minLength}}</small>
        </div>
      </div>
    </div>
  </form>`,
  styles: [
    `
       ::ng-deep .timepicker-wrapper {
        display: flex;
        flex-direction: column;
        
        ::ng-deep .p-calendar {
        position: relative;
        display: inline-flex;
        max-width: 590px;
        width: 100%;
      }
     
   
        label {
          font-size: 12px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
        }
        .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
        .timepicker-bg-icon {
          width: 100% !important;
        
 
          button {
            background: transparent !important;
            color: #B3B3B3;
            
            border-radius: 0px 11px 11px 0px !important;
            border-color: var(--grisBorder) !important;
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
export class DatepickerComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
  // minDate: any = this.field?.dateRules?.minDate || new Date('01/01/1900');
  // maxDate: any = this.field?.dateRules?.minDate  || new Date();
  ngOnChanges(changes: SimpleChanges) {
    // // console.log(this.field?.dateRules?.minDate)
  }
}
