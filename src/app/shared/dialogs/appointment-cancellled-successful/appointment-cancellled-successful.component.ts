import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-appointment-cancellled-successful',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-cancellled-successful.component.html',
  styleUrls: ['./appointment-cancellled-successful.component.scss']
})
export class AppointmentCancellledSuccessfulComponent {
  
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

}
