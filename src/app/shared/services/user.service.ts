import { ResetPasswordReqDTO } from '@DTOs/requests/reset-password-req.dto';
import { ResetPasswordResDTO } from '@DTOs/responses/reset-password-res.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BLOCAGE_USER_API, DELETE_ACCOUNT_API, DESACTIVATE_ACCOUNT_API, FORGOT_PASSWORD_EMAIL_API, GET_FAMILY_MEMBERS_BY_USER_ID_API, RESET_PASSWORD_EMAIL_API } from '@core/constants/api.constants';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/IUser';
import { DeactivateAccountResDTO } from '@DTOs/responses/deactivate-account-res.dto';
import { DeleteAccountResDTO } from '@DTOs/responses/delete-account-res.dto';
import { DeleteAccountReqDTO } from '@DTOs/requests/delete-account-req.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUser {

 

  _http = inject(HttpClient);
  _router = inject(Router);
  _store = inject(Store<AppStateInterface>);


  deactivateAccount(): Observable<DeactivateAccountResDTO> {
    return this._http.put<DeactivateAccountResDTO>(DESACTIVATE_ACCOUNT_API,{});
  }
  deleteAccount(description: DeleteAccountReqDTO): Observable<DeleteAccountResDTO> {
    return this._http.put<DeleteAccountResDTO>(DELETE_ACCOUNT_API,{description: description});
  }
  sendEmailForgertPassword(email: ResetPasswordReqDTO): Observable<ResetPasswordResDTO> {
    return this._http.post<ResetPasswordResDTO>(FORGOT_PASSWORD_EMAIL_API, { email: email });
  }

  resetPassword(password: ResetPasswordReqDTO, token: string, idUrl: string): Observable<ResetPasswordResDTO> {
    return this._http.post<ResetPasswordResDTO>(RESET_PASSWORD_EMAIL_API + `/${idUrl}/${token}`, { newPassword: password });
  }

  getFamilyMembers(id:string): Observable<any> {
    return this._http.get<any>(GET_FAMILY_MEMBERS_BY_USER_ID_API+`/${id}`);
  }
}
