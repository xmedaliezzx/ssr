import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-reclamation',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    DropdownModule,
    MessagesModule,
    InputTextareaModule,
    CheckboxModule],
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})

export class ReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  // type = [
  //   { name: 'Patient' },
  //   { name: 'Médecin Génaraliste' },
  //   { name: 'Médecin Neurologue' }
  // ];

  type = [
    'Patient',
    'Médecin Génaraliste',
    'Médecin Neurologue'
  ];

  selectedOption!: any;


  ngOnInit() {
 



    this.reclamationForm = this.formBuilder.group({
      selectedType: [''],
      selecteddemand: [''],
      email: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      message: [''],
     
     
    });
  }

  send(){}

}
