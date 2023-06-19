import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-successful-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './successful-booking.component.html',
  styleUrls: ['./successful-booking.component.scss']
})
export class SuccessfulBookingComponent {
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
