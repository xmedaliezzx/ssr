import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';
import { PATIENT_MEMBER } from './update-patient-member.config';
import { FormComponent } from '@shared/dynamicForm/form/form.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-update-patient-member',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent,
    ButtonModule
  ],
  templateUrl: './update-patient-member.component.html',
  styleUrls: ['./update-patient-member.component.scss']
})
export class UpdatePatientMemberComponent {
  @Output() onchange = new EventEmitter();
  loading: boolean = false;

  updatePatienForm: DynamicForm = PATIENT_MEMBER;

  constructor() { }

  ngOnInit() { }

}
