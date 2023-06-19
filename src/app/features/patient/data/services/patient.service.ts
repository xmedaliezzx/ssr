import { Injectable ,inject } from '@angular/core';
import { IPatient } from '../interfaces/Ipatient';
import { HttpClient } from '@angular/common/http';
import { UpdatePersoInfoReqDto } from '@DTOs/requests/update-perso-info-req.dto';
import { UpdatePhoneNumberReqDto } from '@DTOs/requests/update-phone-number-req.dto';
import { UpdatePWDReqDto } from '@DTOs/requests/update-pwd-req.dto';
import { UpdatePersoInfoResDTO } from '@DTOs/responses/update-perso-info-res.dto';
import { UpdatePhoneNumberResDTO } from '@DTOs/responses/update-phone-number-res.dto';
import { UpdatePWDResDTO } from '@DTOs/responses/update-pwd-res.dto';
import { Observable } from 'rxjs';
import { CHANGE_PASSWORD_API, SEND_OTP_API, UPDATE_PROFILE_API } from '@core/constants/api.constants';
import { UpdateEmailReqDto } from '@DTOs/requests/update-email-req.dto';

@Injectable()
export class PatientService implements IPatient {
  _http = inject(HttpClient)

  constructor() { }
  updatePersonalInfo(UpdatePersoInfo: UpdatePersoInfoReqDto): Observable<UpdatePersoInfoResDTO> {
    return this._http.put<UpdatePersoInfoResDTO>(UPDATE_PROFILE_API, UpdatePersoInfo)
  }
  updatePhoneNumber(UpdatePhoneNumber: UpdatePhoneNumberReqDto): Observable<UpdatePhoneNumberResDTO> {
    throw new Error('Method not implemented.');
  }
  // updateEmail(UpdateEmail: UpdateEmailReqDto): Observable<UpdatePWDResDTO> {
  //   return this._http.put<UpdatePWDResDTO>(UPDATE_PROFILE_API, UpdateEmail)
  // }
  changePassword(UpdatePWD: UpdatePWDReqDto): Observable<UpdatePWDResDTO> {
   return this._http.post<UpdatePWDResDTO>(CHANGE_PASSWORD_API, UpdatePWD)
  }
  sendOtp(phoneNumber: number): Observable<any> {
    return this._http.post<any>(SEND_OTP_API, {phoneNumber})
  }
}
