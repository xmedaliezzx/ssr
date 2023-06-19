import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { Field } from '../field.config';

@Component({
  selector: 'app-inputupload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FileUploadModule],
  template: `
    <form
      style="margin : 0.5rem !important ;position:relative"
      class="upload-wrapper"
    >
    <label [htmlFor]="field.name">{{ field.label }}</label>
      <p-fileUpload
        #cutomUpload
        mode="basic"
        [styleClass]="'customUpload'"
        name="demo[]"
    
        [uploadIcon]="'pi pi-file-o'"
        [uploadLabel]="''"
        [customUpload]="true"
        [uploadLabel] = 'filename'
        [chooseIcon]="'pi pi-file-o'"
        [maxFileSize]="10000000000"
        (onSelect)="onSelect($event)"
        (uploadHandler)="onRemove()"
      ></p-fileUpload>
    </form>
  `,
  styles: [
    `
    ::ng-deep{ 
     

      .p-button .p-button-label {
        font-size: 16px !important;
          color: #b3b3b3 !important;
         display: flex !important;
        flex-direction: row-reverse;
        justify-content: flex-end !important;
      }
      .p-fileupload-choose:not(.p-disabled):hover{
    background: var(--white) !important;
    color: #000000 !important;
    border-color: #aaaaaa !important;
}}
      ::ng-deep .customUpload {
     
        color: #000000;
        min-width: 230px !important;
        /* background: #3B82F6; */
        border: 1px solid #aaaaaa;
        /* padding: 0.75rem 1.25rem; */
        font-size: 1rem;
        transition: background-color 0.2s, color 0.2s, border-color 0.2s,
          box-shadow 0.2s;
        border-radius: 11px;
        background-color: var(--white);
        display: flex !important;
        flex-direction: row-reverse;
        justify-content: flex-end !important;
        padding-right: 9px !important;
        .error-text {
          font-size: 12px !important;
          font-family: tommy_Regular !important;
          span {
            background: transparent !important;
          }
        }
   
        .pi-file-o:before {

margin-left: 205px;
}
.p-button.p-button-icon-only {
   width: 100%; 
 
}
      }
      .error-text {
        font-size: 12px !important;
        font-family: tommy_Regular !important;
      }
      label {
        font-size: 12px !important;
          color: #2e3c66 !important;
          font-family: tommy_Regular !important;
       
        }
        ::ng-deep .upload-wrapper {

          
        }

    `,
  ],
})
export class InputuploadComponent {
  @ViewChild('cutomUpload') fileUpload: any;
  @Input() form!: FormGroup;
  @Input() field!: Field;
  @Input() formdata: FormData;
  filename :string
  onSelect(event: any) {
    this.formdata.append(this.field.name, event.currentFiles[0]);
    console.log('event',event.files[0].name );
    this.filename =event.files[0].name
  }
  onRemove() {
    this.fileUpload.clear();
  }
}
