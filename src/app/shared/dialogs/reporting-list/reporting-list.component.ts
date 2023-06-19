import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-reporting-list',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule],
  templateUrl: './reporting-list.component.html',
  styleUrls: ['./reporting-list.component.scss']
})
export class ReportingListComponent {
  checked: string ="";
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}
