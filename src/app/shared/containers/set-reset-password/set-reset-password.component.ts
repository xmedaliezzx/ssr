import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { Router, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { getIdUrlFromEmail, getTokenUrlFromEmail } from '@store/user/user.selector';
import { RoutesConstants } from '@core/constants/routes.constants';
import { cleanStore } from '@store/user/user.action';
import { ConfirmedValidator } from '@shared/validators/Confirmpassword.validator';
import { ResetPasswordResDTO } from '@DTOs/responses/reset-password-res.dto';
import { USER_SERVICE } from '@core/constants/tokens.constants';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-set-reset-password',
  standalone: true,
  imports: [CommonModule, ToastModule, ProgressBarModule, RouterModule, PasswordModule, ReactiveFormsModule, FormsModule, TranslateModule],
  templateUrl: './set-reset-password.component.html',
  styleUrls: ['./set-reset-password.component.scss']
})
export class SetResetPasswordComponent {

  _userService = inject(USER_SERVICE)
  _store = inject(Store<AppStateInterface>);
  _router = inject(Router);

  tokenUrl!: Observable<string>;
  token: string = ''
  idUrl: string = '';

  progressBarValue: number = 60
  password: string = ''
  submitted = false;
  error: string = '';
  setPasswordForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.getTokenFromSelector();
    this.getIdFromSelector();
  }


  ngOnInit() {
    this.setPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
      {
        validator: ConfirmedValidator('password', 'confirmPassword')
      }
    );
  }

  getTokenFromSelector() {
    this._store.select(getTokenUrlFromEmail).subscribe({
      next: (res) => {
        this.token = res;
      },
      error: (err) => {
        // // console.log(err)
      },
      complete: () => {
        // // console.log('complete')
      }
    })
  }

  getIdFromSelector() {
    return this._store.select(getIdUrlFromEmail).subscribe({
      next: (res) => {
        this.idUrl = res;
      },
      error: (err) => {
        // // console.log(err)
      },
      complete: () => {
        // // console.log('complete')
      }
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.setPasswordForm.invalid) {
      return;
    }
    this._userService.resetPassword(this.setPasswordForm.controls.password.value, this.token, this.idUrl).subscribe({
      next: (data: ResetPasswordResDTO) => {
        if (data && data.success) {
          this.cleanStore();
          this._router.navigate(['/verify-token-password/' + RoutesConstants.reset_password_successful.route]);
        }
      },
      error: (err) => {
        this.error = err.message;
        this.cleanStore();
        this._router.navigate([RoutesConstants.email_expired.route]);
      },
      complete: () => {
        this.submitted = false;
        // // console.log('<<< complete >>>')
      }
    })
  }

  cleanStore() {
    this._store.dispatch(cleanStore());
  }

  goSignin() {
    this._router.navigate([RoutesConstants.signin.route]);
  }
}