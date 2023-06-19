import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CLOSE } from '@store/dialog/dialog.action';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-outher-member',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule, InputTextareaModule],
  templateUrl: './outher-member.component.html',
  styleUrls: ['./outher-member.component.scss']
})
export class OutherMemberComponent {

  checked: string ="";
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

}
