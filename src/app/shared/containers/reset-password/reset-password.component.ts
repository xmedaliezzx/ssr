import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { Router, RouterModule } from '@angular/router';
import { RoutesConstants } from '@core/constants/routes.constants';
import { ResetPasswordResDTO } from '@DTOs/responses/reset-password-res.dto';
import { USER_SERVICE } from '@core/constants/tokens.constants';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, InputTextModule, ProgressBarModule, ToastModule, TranslateModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  _userService = inject(USER_SERVICE);
  _router = inject(Router);

  progressBarValue: number = 30
  email: string = '';
  emailForm!: FormGroup;
  error: string = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    }
    this._userService.sendEmailForgertPassword(this.emailForm.controls.email.value).subscribe({
      next: (data: ResetPasswordResDTO) => {
        this._router.navigateByUrl(RoutesConstants.check_inbox.nativeRoute + this.emailForm.controls.email.value);
      },
      error: (error) => {
        // // console.log('error => ', error)
       },
      complete: () => {
        this.submitted = false;
      }
    })
  }

}
