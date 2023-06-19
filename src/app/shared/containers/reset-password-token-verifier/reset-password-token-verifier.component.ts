import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as crypto from 'crypto-js';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { selectQueryParams } from '@store/routing/routing.selector';
import { secretKey } from '@core/constants/secrets.constants';
import { ProgressBarModule } from 'primeng/progressbar';
import { setTokenUrl } from '@store/user/user.action';
import { RoutesConstants } from '@core/constants/routes.constants';

@Component({
  selector: 'app-reset-password-token-verifier',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarModule],
  templateUrl: './reset-password-token-verifier.component.html',
  styleUrls: ['./reset-password-token-verifier.component.scss'],
})
export class ResetPasswordTokenVerifierComponent {
  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);
  _store = inject(Store<AppStateInterface>);
  selectQueryParams = this._store.select(selectQueryParams);
  user_id!: string;
  token!: string;
  progressBarValue: number = 30;
  constructor() {
    this.selectQueryParams.subscribe((params) => {
      if (params.token) {
        let data: any[] = JSON.parse(
          crypto.AES.decrypt(
            params.token.replace('%2B', '/'),
            secretKey
          ).toString(crypto.enc.Utf8)
        );
        this.user_id = data[0].userId;
        this.token = data[1].token;
      }
    
    });
    this._store.dispatch(setTokenUrl({ token: this.token, id: this.user_id }))
    if (!this.user_id && !this.token) {
      this._router.navigate(['/']);
    }
    else {
      this._router.navigate(['/verify-token-password/'+RoutesConstants.set_reset_password.route])
    }

    // const token = this._activatedRoute.snapshot.queryParams.token;
    // const email = this._activatedRoute.snapshot.queryParams.email;
    // const hash = this._activatedRoute.snapshot.queryParams.hash;
    // const hashFromToken = crypto.SHA256(token + email).toString();
    // if (hashFromToken === hash) {
    //   this._router.navigate(['/set-reset-password'], {
    //     queryParams: { token, email },
    //   });
    // } else {
    //   this._router.navigate(['/reset-password']);
    // }
  }
}
