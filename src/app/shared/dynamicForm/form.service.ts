import { Injectable } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Field } from './field.config';
import { DynamicForm } from './dynamicform.config';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  form: FormBuilder = new FormBuilder();
  constructor() { }
  buildForm(fieldsRaw: Field[]) {
    const fields = [...fieldsRaw]
    if(innerWidth > 1024)
    fields.sort(
      (a: Field, b: Field) => a.desktopOrder - b.desktopOrder
    );
    else {
      fields.sort(
        (a: Field, b: Field) => a.mobileOrder - b.mobileOrder
      );
    }
    // console.log('fields trier>> ', fields)
    const formGroupFields: any = {};
    for (const field of fields) {
      const validators: any = this.addValidator(field.rules);
      formGroupFields[field.name] = new FormControl(
        { value: field.value, disabled: field.disabled },
        validators
      );
    }
    return this.form.group(formGroupFields);
  }

  addValidator(rules: any) {
    if (!rules) {
      return [];
    }
    const validators = Object.keys(rules).map((rule: string) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        case 'email':
          return Validators.email;
        case 'minLength':
          return Validators.minLength(rules[rule]);
        case 'maxLength':
          return Validators.maxLength(rules[rule]);
        case 'pattern':
          return Validators.pattern(rules[rule]);
        default:
          return [];
      }
    });
    return validators;
  }

  removehiddenFields(DynamicForm: DynamicForm, form: FormGroup) {
    Object.keys(form.getRawValue()).map((key: any) => {
      if (
        DynamicForm.fields[
          DynamicForm.fields.findIndex((field) => field.name == key)
        ]?.children?.length > 0
      ) {
        DynamicForm.fields[
          DynamicForm.fields.findIndex((field) => field.name == key)
        ]?.children.map((child: any) => {
          if (
            form.get(
              DynamicForm.fields[
                DynamicForm.fields.findIndex((field) => field.name == key)
              ].name
            )?.value != child.activationValue
          ) {
            child.childrenFields.map((childrenfield: any) => {
              form.controls[childrenfield.name].patchValue('');
            });
          }
        });
      }
    });
    return form.getRawValue();
  }

  createFormData(form: any, formData: FormData) {
    Object.keys(form).map((key: any) => {
      formData.append(key, form[key]);
    });
  }

  // orderFields(Fields: Field[], innerWidth: any): Field[] {
  //   if (innerWidth < 1024) {
  //     return Fields.sort((a: Field, b: Field) => a.mobileOrder - b.mobileOrder);
  //   } else {
  //     return Fields.sort(
  //       (a: Field, b: Field) => a.desktopOrder - b.desktopOrder
  //     );
  //   }
  // }

}
