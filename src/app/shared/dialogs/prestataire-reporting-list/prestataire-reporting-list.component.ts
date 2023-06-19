import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-prestataire-reporting-list',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule],
  templateUrl: './prestataire-reporting-list.component.html',
  styleUrls: ['./prestataire-reporting-list.component.scss']
})
export class PrestataireReportingListComponent {
  checked: string ="";
  constructor(private store: Store) { }

  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
