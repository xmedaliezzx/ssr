import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { LottieModule, AnimationOptions } from 'ngx-lottie';
import { RoutesConstants } from '@core/constants/routes.constants';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { cleanStore } from '@store/user/user.action';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password-successful',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarModule, LottieModule, TranslateModule],
  templateUrl: './reset-password-successful.component.html',
  styleUrls: ['./reset-password-successful.component.scss']
})
export class ResetPasswordSuccessfulComponent {

  _router = inject(Router);
  _store = inject(Store<AppStateInterface>);

  progressBarValue: number = 100
  options: AnimationOptions = {
    path: '/assets/lottie/successful.json',
  };

  navigateToSignIn() {
    this._router.navigate([RoutesConstants.auth.route + '/' + RoutesConstants.signin.route]);
  }
}
