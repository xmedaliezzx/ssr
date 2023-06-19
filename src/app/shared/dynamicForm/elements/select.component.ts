import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Field } from '../field.config';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule],
  template: `<form style="margin : 0.5rem !important" [formGroup]="form">
    <div class="select-wrapper">
      <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-dropdown
        [formControlName]="field.name"
        [options]="field.options || []"
        [showClear]="true"
        [placeholder]="field.placeholder || 'Select an option'"
      ></p-dropdown>
      <div *ngIf="(form.controls[field.name].touched || form.controls[field.name].dirty) && form.controls[field.name].invalid">
        <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
          <small class="p-error error-text" *ngSwitchCase="'required'" >Champ Obligatoire</small>
        </div>
      </div>
    </div>
  </form> `,
  styles: [
    `
    ::ng-deep   .select-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 1rem; */
        
        label {
          font-size: 12px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
       
        }
          .p-dropdown {
            border: 1px solid var(--grisBorder);
            border-radius: 11px !important;
            background-color: transparent;
            width: 100% !important;
            max-width: 590px;
          }
          .p-dropdown-panel .p-dropdown-items {
            background-color: #f1fbfc;
            border: 1px solid #1b8793;
            border-radius: 11px;
          }
          .p-dropdown-panel
            .p-dropdown-items
            .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
            color: #323130;
            background: #1b87934d;
          }

          .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
            color: #323130;
            background: #1b87934d;
          }
        }
      
      .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
        }
    `,
  ],
})
export class SelectComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
