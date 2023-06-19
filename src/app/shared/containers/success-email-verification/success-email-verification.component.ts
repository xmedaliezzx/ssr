import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule,AnimationOptions } from 'ngx-lottie';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-success-email-verification',
  standalone: true,
  imports: [CommonModule,LottieModule, TranslateModule],
  templateUrl: './success-email-verification.component.html',
  styleUrls: ['./success-email-verification.component.scss']
})
export class SuccessEmailVerificationComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/verif_email.json',
  };
}
