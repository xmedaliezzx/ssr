import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-worning-blocked-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worning-blocked-appointment.component.html',
  styleUrls: ['./worning-blocked-appointment.component.scss']
})
export class WorningBlockedAppointmentComponent {
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
