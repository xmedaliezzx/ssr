import { UpdatePersoInfoReqDto } from "@DTOs/requests/update-perso-info-req.dto";
import { UpdatePersoInfoResDTO } from "@DTOs/responses/update-perso-info-res.dto";
import { UpdatePhoneNumberReqDto } from "@DTOs/requests/update-phone-number-req.dto";
import { Observable } from "rxjs";
import { UpdatePhoneNumberResDTO } from "@DTOs/responses/update-phone-number-res.dto";
import { UpdatePWDResDTO } from "@DTOs/responses/update-pwd-res.dto";
import { UpdatePWDReqDto } from "@DTOs/requests/update-pwd-req.dto";

export interface IPatient {
    updatePersonalInfo(UpdatePersoInfo:UpdatePersoInfoReqDto):Observable<UpdatePersoInfoResDTO>
    updatePhoneNumber(UpdatePhoneNumber:UpdatePhoneNumberReqDto):Observable<UpdatePhoneNumberResDTO>
    changePassword(UpdatePWD:UpdatePWDReqDto):Observable<UpdatePWDResDTO>
    sendOtp(phoneNumber:number):Observable<any>
}