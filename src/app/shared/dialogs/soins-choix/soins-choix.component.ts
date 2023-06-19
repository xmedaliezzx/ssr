import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { setAppointmentType } from '@store/appointment/rdv.action';

@Component({
  selector: 'app-soins-choix',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule],
  templateUrl: './soins-choix.component.html',
  styleUrls: ['./soins-choix.component.scss'],
})
export class SoinsChoixComponent {
  _router = inject(Router);
  checked: string = '';
  constructor(private store: Store) { }

  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

  confirm() {
    this.store.dispatch(setAppointmentType({ appointmentType: this.checked }));
    this.close('soinsChoixModal');
    this._router.navigate(['/appointment']);
  }
}
