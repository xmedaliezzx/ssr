import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-patient-medical-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-medical-card.component.html',
  styleUrls: ['./patient-medical-card.component.scss']
})
export class PatientMedicalCardComponent {
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
