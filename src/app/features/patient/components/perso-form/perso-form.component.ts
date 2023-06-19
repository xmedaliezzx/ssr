import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '@models/user.model';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { AppStateInterface } from '@store/app.state';
import { PATIENT_SERVICE } from '@core/constants/tokens.constants';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { setUserInfo } from '@store/user/user.action';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { getAuthenticatedUser } from '@store/user/user.selector';

@Component({
  selector: 'app-perso-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, DropdownModule,ButtonModule, CalendarModule, InputTextModule,],
  templateUrl: './perso-form.component.html',
  styleUrls: ['./perso-form.component.scss']
})
export class PersoFormComponent {
  gender: any[] = ['Male', 'Female'];
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
  PersoInfoBTNLoading: boolean = false;
  PersoInfoForm!: FormGroup;
  user!: User;
  _store = inject(Store<AppStateInterface>);
  _patient = inject(PATIENT_SERVICE);
  _toastr = inject(MessageService);
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private _route: Router) { }
  retour() {
    this._route.navigate(['/profile/Profil']);
  }
  ngOnInit() {
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
  this.getUserProfileData();
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
       // this.phoneNumberForm.controls.phoneNumber.setValue(this.user?.phoneNumber);
        // this.PWDForm.controls.email.setValue(this.user?.email);
       // this.mailForm.controls.email.setValue(this.user?.email);

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
}
