import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule, AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { RoutesConstants } from '@core/constants/routes.constants';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-email-expired',
  standalone: true,
  imports: [CommonModule, LottieModule, TranslateModule],
  templateUrl: './email-expired.component.html',
  styleUrls: ['./email-expired.component.scss']
})
export class EmailExpiredComponent {

  _route = inject(Router)

  options: AnimationOptions = {
    path: '/assets/lottie/expired.json',
  };

  redirectToForgetPAssword() {
    this._route.navigateByUrl(RoutesConstants.forget_password.route);
  }
}
