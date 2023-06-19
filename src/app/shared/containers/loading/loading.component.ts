import { Component } from '@angular/core';
import { AnimationOptions, LottieModule } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/hourglass.json',
  };
}
