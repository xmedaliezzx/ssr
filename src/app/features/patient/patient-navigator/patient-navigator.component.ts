import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-navigator',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './patient-navigator.component.html',
  styleUrls: ['./patient-navigator.component.scss']
})
export class PatientNavigatorComponent {

}
