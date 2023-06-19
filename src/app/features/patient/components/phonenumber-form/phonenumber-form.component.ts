import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '@models/user.model';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PATIENT_SERVICE } from '@core/constants/tokens.constants';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { getAuthenticatedUser } from '@store/user/user.selector';

@Component({
  selector: 'app-phonenumber-form',
  standalone: true,
  imports: [CommonModule, FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,],
  templateUrl: './phonenumber-form.component.html',
  styleUrls: ['./phonenumber-form.component.scss']
})
export class PhonenumberFormComponent {
  phoneNumberForm!: FormGroup;
  user!: User;
  _store = inject(Store<AppStateInterface>);
  _patient = inject(PATIENT_SERVICE);
  showPhoneInputs: boolean = true;
  PhoneBTNLoading: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private _route: Router) { }
  retour() {
    this._route.navigate(['/profile/Profil']);
  }
  ngOnInit() {
    this.phoneNumberForm = new FormGroup({
      phoneNumber: new FormControl({
        value: this.user?.phoneNumber,
        disabled: true,
      }),
      phoneNumberNV: new FormControl('', Validators.required),
      phoneNumberOTP: new FormControl('', Validators.required),
    });
    this.getUserProfileData();

  }

  getUserProfileData() {
    this._store
      .select(getAuthenticatedUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.user = user;
        
        this.phoneNumberForm.controls.phoneNumber.setValue(this.user?.phoneNumber);
       
       
      });
  }

  updateNumber() {
    this.showPhoneInputs = !this.showPhoneInputs;
  }

  sendOTP() {
    this._patient.sendOtp(this.phoneNumberForm.controls.phoneNumberNV.value).subscribe({
      next: (response) => {
        // console.log(response);
      },
      error: (error) => {},
      complete: () => {},
    })
  }
  UpdatePhoneNumber() {
    // console.log(this.phoneNumberForm.value);
  }
}
