import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { Router, RouterModule } from '@angular/router';
import { LoginReqDTO } from '@DTOs/requests/login-req.dto';
import { USER_FACADE } from '@core/constants/tokens.constants';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    StyleClassModule,
    CheckboxModule,
    TranslateModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  _userFacade = inject(USER_FACADE);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  signInForm!: FormGroup;
  stayConnected: boolean = false;
  submitted = false;
  error: string = '';

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    this._userFacade.signIn(this.signInForm.value as LoginReqDTO)
  }

}
