import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestataire-rating',
  standalone: true,
  imports: [CommonModule, InputTextareaModule,FormsModule, RatingModule],
  templateUrl: './prestataire-rating.component.html',
  styleUrls: ['./prestataire-rating.component.scss'],
})
export class PrestataireRatingComponent {
  rate: boolean = false;
  starsValue: number = 0;
  constructor(private store: Store) {}
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

  myRate() {
    this.rate = !this.rate;
  }
}
