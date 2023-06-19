import {
  Component,
  ViewChild,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AUTH_SERVICE } from '@core/constants/tokens.constants';
import { RegisterReqDTO } from '@DTOs/requests/register.dto';
import { Subject, takeUntil } from 'rxjs';
import { RegisterResDTO } from '@DTOs/responses/register-res.dto';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormComponent } from '@shared/dynamicForm/form/form.component';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';
import { RoutesConstants } from '@core/constants/routes.constants';
import { MessageService } from 'primeng/api';
import { SIGN_UP } from './sign-up.config';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    MessagesModule,
    FormComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  _auth = inject(AUTH_SERVICE);
  _route = inject(Router);
  _toastr = inject(MessageService);

  @ViewChild(FormComponent) formComponent!: FormComponent;
  destroy$: Subject<boolean> = new Subject<boolean>();
  signUpForm: DynamicForm = SIGN_UP;
  loading: boolean = false;
  prestatire: boolean = false;

  longitude: number = 0;
  latitude: number = 0;

  constructor() { }

  ngOnInit() {
    this.getLocation()
  }

  signup() {
    this.loading = true;
    let data = this.formComponent.submitForm();
    data.prestataire = false
    data.role = 'user';
    if(data.hasOwnProperty('hasAllergie')) delete data.hasAllergie;
    if(data.hasOwnProperty('conditions_generales')) delete data.conditions_generales;
    data.location = {
      type: 'Point',
      coordinates: [this.longitude, this.latitude]
    }
    this._auth.signup(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (signupDTO: RegisterResDTO) => {
          let success_signup = RoutesConstants.check_inbox.nativeRoute
          this._route.navigate([success_signup, data.email])
          this.loading = true;
        
        },
        error: (err) => {
          // // console.log(err);
          this.loading = false;
          this._toastr.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error.message,
          });
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
      });
    } else {
      // // console.log('No support for geolocation');
    }
  }
}
