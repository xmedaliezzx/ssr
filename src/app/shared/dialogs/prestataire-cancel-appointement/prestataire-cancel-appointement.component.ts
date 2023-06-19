import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-prestataire-cancel-appointement',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule],
  templateUrl: './prestataire-cancel-appointement.component.html',
  styleUrls: ['./prestataire-cancel-appointement.component.scss']
})
export class PrestataireCancelAppointementComponent {
  checked: string ="";
  constructor(private store: Store) { }

  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
