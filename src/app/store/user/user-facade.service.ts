import { Injectable, inject } from '@angular/core';
import { AppStateInterface } from '..';
import { Store } from '@ngrx/store';
import { signIn } from './user.action';
import { LoginReqDTO } from '@DTOs/requests/login-req.dto';

@Injectable()
export class UserFacadeService {
  _store = inject(Store<AppStateInterface>);
  constructor() { }

  signIn(signInForm: LoginReqDTO){
    this._store.dispatch(signIn({signInForm}));
  }

}
