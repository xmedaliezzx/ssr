import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-rdv-step3',
  standalone: true,
  imports: [CommonModule, CalendarModule,ReactiveFormsModule, DropdownModule, RadioButtonModule, FormsModule],
  templateUrl: './rdv-step3.component.html',
  styleUrls: ['./rdv-step3.component.scss']
})
export class RdvStep3Component implements OnInit {
  services: string[] = ['Médecin généraliste', 'Infermier', 'Aide soignant(e)'];
  selectedService: string = 'Médecin généraliste';
  date!: Date[];
  hours: string[] = ['7h', '8h', '9h'];
  places: string[] = ['A domicile', 'Autre destination'];
  gender: string[] = ['Indifférent', 'Homme', 'Femme'];
  ingredient!: string;
  selectedhour!: string;
  selectedplace!: string;
  selectedgender!: string;
  formGroup = new FormGroup({})

  constructor(){}
  ngOnInit() {

  }
}
