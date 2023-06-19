import { createReducer, on } from '@ngrx/store';
import * as fromUSER from './user.action';
import { UserState ,ACTIVE_INTERFACE } from './user.state';
import { User } from '@models/user.model';


export const initialState: UserState = {
  isAppLoading: false,
  user: {} as User,
  activeInterface: ACTIVE_INTERFACE.PATIENT,
  access_token: '',
  refresh_token: '',
  token_email: '',
  id_email: '',
  typePrestataire :'paramedical'
};

export const userReducer = createReducer(
  initialState,
  on(fromUSER.signIn, (state) => ({
    ...state,
    isAppLoading: true,
  })),
  on(
    fromUSER.signInSuccess,
    (state, { access_token, refresh_token, user }) => ({
      ...state,
      isAppLoading: false,
      user: user,
      access_token: access_token,
      refresh_token: refresh_token,
    })
  ),
  on(fromUSER.signInSuccess, (state, data) => ({
    ...state,
    isAppLoading: false,
  })),

  // Set User Info
  on(fromUSER.setUserInfo, (state, { user }) => ({
    ...state,
    isAppLoading: false,
    user: user,
  })),

  //set type Prestataire
  
  on(fromUSER.setTypePrestataire, (state, { typePrestataire }) => ({
    ...state,
    isAppLoading: false,
    typePrestataire: typePrestataire,
  })),
// clean type prestataire
on(fromUSER.clearTypePrestataire, (state) => ({
  ...state,
  typePrestataire :'paramedical'

})),
  // Set Tokens
  on(fromUSER.tokenPersist, (state, { access_token, refresh_token }) => ({
    ...state,
    access_token: access_token,
    refresh_token: refresh_token,
  })),

  // Set Token Url for email verification
  on(fromUSER.setTokenUrl, (state, { id, token }) => ({
    ...state,
    isAppLoading: false,
    token_email: token,
    id_email: id,
  })),

  on(fromUSER.OpenPatient, (state) => ({
    ...state,
    activeInterface: ACTIVE_INTERFACE.PATIENT,
  })),
  on(fromUSER.OpenPrestataire, (state) => ({
    ...state,
    activeInterface: ACTIVE_INTERFACE.PRESTATAIRE,
  })),
  // clean Store
  on(fromUSER.cleanStore, (state) => ({
    ...initialState,

  }))


);
