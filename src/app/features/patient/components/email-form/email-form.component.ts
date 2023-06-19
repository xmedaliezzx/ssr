import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '@models/user.model';
import { Subject, takeUntil } from 'rxjs';
import { getAuthenticatedUser } from '@store/user/user.selector';
import { AppStateInterface } from '@store/app.state';
import { PATIENT_SERVICE } from '@core/constants/tokens.constants';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule,FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,],
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  _store = inject(Store<AppStateInterface>);
  _patient = inject(PATIENT_SERVICE);
  _toastr = inject(MessageService);
  destroy$: Subject<boolean> = new Subject<boolean>();
  mailForm!: FormGroup;
  user!: User;
  showMailInputs: boolean =true
  PhoneBTNLoading: boolean = false;
  constructor(private _route: Router) { }
  retour() {
    this._route.navigate(['/profile/Profil']);
  }
  ngOnInit() {
  this.mailForm = new FormGroup(
    {
      email: new FormControl({ value: this.user?.email, disabled: true }),
      new_email: new FormControl('', Validators.required),

   
    }
    // { Validators: ConfirmedValidator('passwordNV', 'confirmPassword') }
  );
  this.getUserProfileData();
}
UpdateEmail(){

}
getUserProfileData() {
  this._store
    .select(getAuthenticatedUser)
    .pipe(takeUntil(this.destroy$))
    .subscribe((user: User) => {
      this.user = user;
      this.mailForm.controls.email.setValue(this.user?.email);
    });
}
}
