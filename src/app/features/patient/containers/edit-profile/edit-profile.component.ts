import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { User } from '@models/user.model';
import { getAuthenticatedUser } from '@store/user/user.selector';
import { ConfirmedValidator } from '@shared/validators/Confirmpassword.validator';
import { PATIENT_SERVICE } from '@core/constants/tokens.constants';
import { MessageService } from 'primeng/api';
import { setUserInfo } from '@store/user/user.action';
import { combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { deactivationReasonModal$$, deleteAccountModal$$, deleteReasonModal$$ } from '@store/dialog/dialog.selector';
import { CLOSE, OPEN } from '@store/dialog/dialog.action';
import { DialogModule } from 'primeng/dialog';
import { DeactivationReasonComponent } from '@shared/dialogs/deactivation-reason/deactivation-reason.component';
import { DeleteAccountComponent } from '@shared/dialogs/delete-account/delete-account.component';

import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    DropdownModule,
    MessagesModule,
    CheckboxModule,
    DialogModule,
    DeactivationReasonComponent,
    DeleteAccountComponent,
    CalendarModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  paysTunisie = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kebili',
    'Kef',
    'Mahdia',
    'Manouba',
    'Medenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan'
  ];
  date: Date;
  deactivationReasonModal$$ : Observable<boolean> = this.store.select(deactivationReasonModal$$);
  deleteReasonModal$$ : Observable<boolean> = this.store.select(deleteReasonModal$$);
  deleteAccountModal$$ : Observable<boolean> = this.store.select(deleteAccountModal$$);
  observables: Observable<boolean>[] = [
    this.deactivationReasonModal$$,
    this.deleteReasonModal$$,
    this.deleteAccountModal$$,
  ]
  deactivationReasonModal :boolean =false
  deleteReasonModal :boolean =false
  deleteAccountModal :boolean =false
  showMailInputs: boolean =false
  destroy$: Subject<boolean> = new Subject<boolean>();
  PersoInfoForm!: FormGroup;
  phoneNumberForm!: FormGroup;
  PWDForm!: FormGroup;
  mailForm!: FormGroup;
  disable: boolean = true;
  showPhoneInputs: boolean = false;
  showPWDInputs: boolean = false;
  showAllergie: boolean = false;
  _store = inject(Store<AppStateInterface>);
  _patient = inject(PATIENT_SERVICE);
  _toastr = inject(MessageService);
  user!: User;
  PersoInfoBTNLoading: boolean = false;
  PasswordBTNLoading: boolean = false;
  PhoneBTNLoading: boolean = false;
  constructor(private formBuilder: FormBuilder,private store: Store<AppStateInterface>) {
    this.initialize();
  }

  initialize() {
    combineLatest(this.observables)
      .pipe(takeUntil(this.destroy$))
      .subscribe(([deactivationReasonModal$$,deleteReasonModal$$,deleteAccountModal$$]): boolean[] | void => {
        this.deactivationReasonModal = deactivationReasonModal$$;
        this.deleteReasonModal = deleteReasonModal$$;
        this.deleteAccountModal = deleteAccountModal$$;
        
      });
  }
  open(dialogName: string) {
    this.store.dispatch(OPEN({ dialogName: dialogName }));
  }
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
  allergieType: any[] = [
    { value: true, key: 'T' },
    { value: false, key: 'F' },
  ];
  gender: any[] = ['Male', 'Female'];
  ngOnInit() {
    if (this.user?.allergie?.length > 0) {
      this.showAllergie = true;
    }
    this.PersoInfoForm = new FormGroup({
      lastname: new FormControl(this.user?.lastname, Validators.required),
      firstname: new FormControl(this.user?.firstname, Validators.required),
      birthDate: new FormControl(this.user?.birthDate, Validators.required),
      gender: new FormControl(this.user?.gender, Validators.required),
      cin: new FormControl(this.user?.cin, Validators.required),
      address: new FormControl(this.user?.address, Validators.required),
      city: new FormControl(this.user?.city, Validators.required),
      postal: new FormControl(this.user?.postal, Validators.required),
      // allergieFieldActivation: new FormControl('', Validators.required),
      allergie: new FormControl(this.user?.allergie, Validators.required),
      // okay: new FormControl('', Validators.required),
      role: new FormControl('user', Validators.required),
    });

    this.phoneNumberForm = new FormGroup({
      phoneNumber: new FormControl({
        value: this.user?.phoneNumber,
        disabled: true,
      }),
      phoneNumberNV: new FormControl('', Validators.required),
      phoneNumberOTP: new FormControl('', Validators.required),
    });

    this.PWDForm = new FormGroup(
      {
        // email: new FormControl({ value: this.user?.email, disabled: true }),
        password: new FormControl({ value: '**********', disabled: true }),
        passwordNV: new FormControl('', Validators.required),
        passwordAncien: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      }
      // { Validators: ConfirmedValidator('passwordNV', 'confirmPassword') }
    );

    this.mailForm = new FormGroup(
      {
        email: new FormControl({ value: this.user?.email, disabled: true }),
        new_email: new FormControl('', Validators.required),

     
      }
      // { Validators: ConfirmedValidator('passwordNV', 'confirmPassword') }
    );
    this.getUserProfileData();
  }
  onGenderChange(activationField: boolean): void {
    this.disable = activationField;
  }

  updateNumber() {
    this.showPhoneInputs = !this.showPhoneInputs;
  }
  updateMail() {
    this.showMailInputs = !this.showMailInputs;
  }
  updatePWD() {
    this.showPWDInputs = !this.showPWDInputs;
  }
  SendOTP() {
    // console.log('SendOTP');
  }
  getUserProfileData() {
    this._store
      .select(getAuthenticatedUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.user = user;
        this.PersoInfoForm.controls.lastname.setValue(this.user?.lastname);
        this.PersoInfoForm.controls.firstname.setValue(this.user?.firstname);
        this.PersoInfoForm.controls.birthDate.setValue(this.user?.birthDate);
        this.PersoInfoForm.controls.gender.setValue(this.user?.gender);
        this.PersoInfoForm.controls.cin.setValue(this.user?.cin);
        this.PersoInfoForm.controls.address.setValue(this.user?.address);
        this.PersoInfoForm.controls.city.setValue(this.user?.city);
        this.PersoInfoForm.controls.postal.setValue(this.user?.postal);
        this.PersoInfoForm.controls.allergie.setValue(this.user?.allergie);
        this.phoneNumberForm.controls.phoneNumber.setValue(this.user?.phoneNumber);
        // this.PWDForm.controls.email.setValue(this.user?.email);
        this.mailForm.controls.email.setValue(this.user?.email);

        this.date = new Date(this.user?.birthDate);
      });
  }
  UpdatePersoInfo() {
    this.PersoInfoBTNLoading = true;
    this._patient
      .updatePersonalInfo(this.PersoInfoForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this._store.dispatch(setUserInfo({ user: response.data.user }));
          this._toastr.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Your personal information has been updated successfully',
          });
          this.PersoInfoBTNLoading = false;
        },
        error: (error) => {
          this._toastr.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Your personal information has not been updated',
          });
          this.PersoInfoBTNLoading = false;
        },
        complete: () => {
          this.PersoInfoBTNLoading = false;
        },
      });
  }

  UpdatePhoneNumber() {
    // console.log(this.phoneNumberForm.value);
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

  Deactivate(){}
  Delete(){}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
