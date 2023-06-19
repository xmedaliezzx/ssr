import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { AnimationOptions, LottieModule } from 'ngx-lottie';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, CheckboxModule, LottieModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/Timer.json',
  };
}
