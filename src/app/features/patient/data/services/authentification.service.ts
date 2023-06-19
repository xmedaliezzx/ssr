import { Injectable, inject } from '@angular/core';
import { IAuthentification } from '../interfaces/Iauthentification';
import { LoginReqDTO } from '@DTOs/requests/login-req.dto';
import { RegisterReqDTO } from '@DTOs/requests/register.dto';
import { LoginResDTO } from '@DTOs/responses/login-res.dto';
import { RegisterResDTO } from '@DTOs/responses/register-res.dto';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { REGISTER_API } from '@core/constants/api.constants';
import { LOGIN_API } from '@core/constants/api.constants';

@Injectable()
export class AuthentificationService implements IAuthentification {

  _http = inject(HttpClient)

  constructor() { }
  signin(LoginReq: LoginReqDTO): Observable<LoginResDTO> {
    return this._http.post<LoginResDTO>(LOGIN_API, LoginReq)
  }

  signup(RegisterReq: RegisterReqDTO): Observable<RegisterResDTO> {
    return this._http.post<RegisterResDTO>(REGISTER_API, RegisterReq);
  }
}
