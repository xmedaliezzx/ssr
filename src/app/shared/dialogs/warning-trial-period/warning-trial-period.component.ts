import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-warning-trial-period',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-trial-period.component.html',
  styleUrls: ['./warning-trial-period.component.scss']
})
export class WarningTrialPeriodComponent {
  constructor(private store: Store) { }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
