import { Component, Input, ViewChild } from '@angular/core';
import { Field } from '../field.config';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FileUploadModule],
  template: `
    <form  style="margin : 0.5rem !important ;position:relative" class="upload-wrapper" >
      <!-- <label [htmlFor]="field.name">{{ field.label }}</label> -->
      <!-- <div class="upload-file-custom"> -->
        <!-- <input [disabled]="true" [value]="inputVal" /> -->
        <p-fileUpload
          #cutomUpload
          mode="basic"
          [styleClass]="'customUpload'"
          name="demo[]"
          [chooseLabel]="field.label || ''"
          [uploadIcon]="'pi pi-delete-left'"
          [uploadLabel]="''"
          [customUpload]="true"
          [chooseIcon]="'pi pi-plus'"
          [maxFileSize]="10000000000"
          (onSelect)="onSelect($event)"
          (uploadHandler)="onRemove()"
        ></p-fileUpload>
        <span style="font-family: tommy_Regular; font-size : 12px">{{inputVal}}</span>
      <!-- </div> -->
      <!-- <div *ngIf="(form.controls[field.name].touched || form.controls[field.name].dirty) && form.controls[field.name].invalid">
        <div *ngFor="let error of form.get(field.name)?.errors | keyvalue" [ngSwitch]="error.key">
          <small class="p-error error-text" *ngSwitchCase="'required'" >Champ Obligatoire</small>
          <small class="p-error error-text" *ngSwitchCase="'minlength'" >minimum {{field.rules?.minLength}}</small>
        </div>
      </div> -->
    </form>
  `,
  styles: [
    `
      .upload-wrapper {
        display: flex;
        flex-direction: column;
        /* margin: 2rem; */
       .upload-file-custom {
        border: 1px solid #B3B3B3;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
          border-radius: 11px !important;
          background-color: transparent;
          /* margin: 0.5rem 0 0.5rem 0; */
        }
      }
      ::ng-deep {
        .customUpload {
          padding: 0 !important;
          color:blue !important;
          
          background: transparent !important;
          border-color: transparent !important;
          width: auto !important;
          /* padding: 0 !important; */
          span {
            background: transparent !important;
           
          }
        }
      }
      .error-text {
        font-size: 12px !important;
          font-family: tommy_Regular !important;
        }

      .upload-file-custom {
        width: 100% !important;
        display: flex;
        border: 1px solid #ced4da;
        
        border-radius: 0.25rem;
        /* padding: 0.375rem 0.75rem; */
        font-size: 1rem;
        line-height: 20px;
        color: #495057;
        background-color: #fff;
        input {
          width: 100% !important;
          border: none !important;
          background-color: #F1FBFC;
          border-radius: 11px;
        
        }
      }
    `,
  ],
})
export class UploadComponent {
  @ViewChild('cutomUpload') fileUpload: any;
  @Input() form!: FormGroup;
  @Input() field!: Field;
  @Input() formdata: FormData;
  inputVal: any = 'Document au format JPG, PNG ou PDF, Max 6 Mo';
  showUploadButton: boolean = false;
  showCancelButton: boolean = false;
  onSelect(event: any) {
    this.formdata.append(this.field.name, event.currentFiles[0]);
    this.inputVal = event.currentFiles[0].name;
  }
  onRemove() {
    this.fileUpload.clear();
    this.inputVal = 'Document au format JPG, PNG ou PDF, Max 6 Mo';
  }
}
