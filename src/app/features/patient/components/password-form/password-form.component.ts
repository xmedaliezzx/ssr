import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Subject, takeUntil } from 'rxjs';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { PATIENT_SERVICE } from '@core/constants/tokens.constants';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,],
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent {
  PWDForm!: FormGroup;
  showPWDInputs: boolean = true;
  PasswordBTNLoading: boolean = false;
  _store = inject(Store<AppStateInterface>);
  _patient = inject(PATIENT_SERVICE);
  _toastr = inject(MessageService);
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private _route: Router) { }
  retour() {
    this._route.navigate(['/profile/Profil']);
  }
  ngOnInit() {
  this.PWDForm = new FormGroup(
    {
      // email: new FormControl({ value: this.user?.email, disabled: true }),
      password: new FormControl({ value: '**********', disabled: true }),
      passwordNV: new FormControl('', Validators.required),
      passwordAncien: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  }

  updatePWDa() {
    this.showPWDInputs = !this.showPWDInputs;
  }

  UpdatePWD() {
    this.PasswordBTNLoading = true;
    if (
      this.PWDForm.invalid ||
      this.PWDForm.value.passwordNV != this.PWDForm.value.confirmPassword
    ) {
      this.PWDForm.markAllAsTouched();
      this.PasswordBTNLoading = false;
      return;
    } else {
      this._patient
        .changePassword({
          oldPassword: this.PWDForm.controls.passwordAncien.value,
          newPassword: this.PWDForm.controls.passwordNV.value,
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this._toastr.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Your password has been updated successfully',
            });
            this.PasswordBTNLoading = false;
          },
          error: (error) => {
            this.PasswordBTNLoading = false;
            this._toastr.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Please Verify Your Informations',
            });
          },
          complete: () => {
            this.PasswordBTNLoading = false;
          },
        });
    }
  }
}
