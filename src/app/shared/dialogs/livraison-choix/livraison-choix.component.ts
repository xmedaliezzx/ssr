import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livraison-choix',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule],
  templateUrl: './livraison-choix.component.html',
  styleUrls: ['./livraison-choix.component.scss']
})
export class LivraisonChoixComponent {

  checked: string ="";
  constructor(private store: Store) {
  
  }


  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }



}
