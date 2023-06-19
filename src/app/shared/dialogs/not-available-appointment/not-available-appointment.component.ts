import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-not-available-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-available-appointment.component.html',
  styleUrls: ['./not-available-appointment.component.scss']
})
export class NotAvailableAppointmentComponent {
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
