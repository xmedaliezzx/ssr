import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicForm } from '../dynamicform.config';
import { FieldType } from '../FieldType';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../elements/checkbox.component';
import { DatepickerComponent } from '../elements/datepicker.component';
import { InputComponent } from '../elements/input.component';
import { RadioComponent } from '../elements/radio.component';
import { SelectComponent } from '../elements/select.component';
import { TimepickerComponent } from '../elements/timepicker.component';
import { UploadComponent } from '../elements/upload.component';
import { TextComponent } from '../elements/text.component';
import { NumberboxComponent } from '../elements/numberbox.component';
import { Password } from 'primeng/password';
import { PasswordComponent } from '../elements/password.component';
import { TextareaComponent } from '../elements/textarea.component';
import { CeremonieFuneraireComponent } from '../elements/ceremonie-funeraire.component';
import { InputuploadComponent } from '../elements/inputupload.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxComponent,
    DatepickerComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    PasswordComponent,
    TimepickerComponent,
    TextComponent,
    UploadComponent,
    NumberboxComponent,
    TextareaComponent,
    CeremonieFuneraireComponent,
    InputuploadComponent
  
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  innerWidth: any = window.innerWidth;
  FieldTypes = FieldType;
  form!: FormGroup;
  formdata = new FormData();
  @Input() dynamicform: DynamicForm;
  @Input() hasFiles: boolean;
  @Input() flexDirection: string;
  @Output() submitEvent = new EventEmitter();
  _formBuilder = inject(FormService);

  ngOnChanges(changes: SimpleChanges) {
    // this._formBuilder.orderFields(this.dynamicform.fields,innerWidth)
    // this.form = this._formBuilder.buildForm(this.dynamicform.fields);

    this.form = this._formBuilder.buildForm(this.dynamicform.fields);
    // // console.log('aaaaaaaaaaaaaaaaaa', this.form);
  }

  submitForm() {
    //   this.form.status === 'VALID'
    //     ? () => {
    //         const form = this._formBuilder.removehiddenFields(
    //           this.dynamicform,
    //           this.form
    //         );
    //         this.hasFiles
    //           ? () => {
    //               this._formBuilder.createFormData(form, this.formdata);
    //               // console.log(this.formdata);
    //             }
    //           : // console.log(this.form.getRawValue());
    //       }
    //     : // console.log('Form is invalid');
    this.submitEvent.emit(this.form.getRawValue());
    return this.form.getRawValue();
  }
}
