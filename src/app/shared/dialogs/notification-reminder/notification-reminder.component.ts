import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notification-reminder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-reminder.component.html',
  styleUrls: ['./notification-reminder.component.scss']
})
export class NotificationReminderComponent {
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
