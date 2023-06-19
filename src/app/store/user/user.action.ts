import { LoginReqDTO } from '@DTOs/requests/login-req.dto';
import { User } from '@models/user.model';
import { createAction, props } from '@ngrx/store';

export const signIn = createAction('[USER] SignIn',
  props<{ signInForm: LoginReqDTO }>());
  //type prestataire

  export const setTypePrestataire = createAction('[type] Set Type Prestataire',
  props<{ typePrestataire: string }>());
  
// clean type Prestataire
export const clearTypePrestataire = createAction('[type] Clean  Type Prestataire')

export const signInSuccess = createAction('[USER] SignIn Success',
  props<{ user: User, access_token: string, refresh_token: string }>()
);
export const signInFailure = createAction('[USER] SignIn Failure',
  props<{ error: any }>()
);
export const tokenPersist = createAction('[USER] Persist Tokens',
  props<{  access_token: string, refresh_token: string }>()
);
// setUserInfoAction
export const setUserInfo = createAction('[USER] Set User Info',
  props<{ user: User }>());

// Set Token Url for email verification
export const setTokenUrl = createAction('[USER] Set Token Url',
  props<{
    token: string,
    id: string
  }>());

  export const OpenPrestataire = createAction('[USER] OpenPrestataire')
  export const OpenPatient = createAction('[USER] OpenPatient')

export const cleanStore = createAction('[USER] Clean Store')
