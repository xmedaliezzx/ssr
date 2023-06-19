import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-warning-expiration-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-expiration-account.component.html',
  styleUrls: ['./warning-expiration-account.component.scss']
})
export class WarningExpirationAccountComponent {
  constructor(private store: Store) { }

  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
