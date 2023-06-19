import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Field } from '../field.config';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: ` <form [formGroup]="form">
    <div class="input-wrapper">
      <span class="title">{{ field.title }}</span>
      <span>{{ field.description }}</span>
      <!-- <input
        pInputText
        [id]="field.disabled ? 'disabled-input' : field.name"
        [type]="field.type"
        #field.name
        [disabled]="field.disabled"
        [class]="field.name"
        [placeholder]="field.placeholder"
        [name]="field.name"
        [formControlName]="field.name"
      /> -->
      <!-- <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
        <small class="p-error" *ngSwitchCase="'required'" >Champ Obligatoire</small>
        <small class="p-error" *ngSwitchCase="'minlength'" >minimum {{field.rules?.minLength}}</small>
      </div> -->
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
    `,
  ],
})
export class TextComponent {
  @Input() field!: Field;
  @Input() form!: FormGroup;
}
