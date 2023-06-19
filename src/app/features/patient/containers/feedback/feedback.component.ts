import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    LottieModule,
    FormsModule,
    InputTextareaModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  rate: boolean = false;
  starsValue: number = 0;
  mystarsValue: number = 2;
  options: AnimationOptions = {
    path: '/assets/lottie/localisation.json',
  };
  myRate() {
    this.rate = !this.rate;
  }
}
