import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itenerary-follow',
  standalone: true,
  imports: [CommonModule,RatingModule,
    LottieModule,
    FormsModule,],
  templateUrl: './itenerary-follow.component.html',
  styleUrls: ['./itenerary-follow.component.scss']
})
export class IteneraryFollowComponent {
  rate: boolean = false;
  starsValue: number = 0;
  mystarsValue: number = 2;
  options: AnimationOptions = {
    path: '/assets/lottie/arrive.json',
  };
  myRate() {
    this.rate = !this.rate;
  }
}
