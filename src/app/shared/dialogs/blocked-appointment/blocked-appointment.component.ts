import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
@Component({
  selector: 'app-blocked-appointment',
  standalone: true,
  imports: [CommonModule, LottieModule],
  templateUrl: './blocked-appointment.component.html',
  styleUrls: ['./blocked-appointment.component.scss']
})
export class BlockedAppointmentComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/sad-face.json',
  };
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

}
