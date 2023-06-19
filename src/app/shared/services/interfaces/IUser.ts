import { DeleteAccountReqDTO } from "@DTOs/requests/delete-account-req.dto";
import { ResetPasswordReqDTO } from "@DTOs/requests/reset-password-req.dto"
import { DeactivateAccountResDTO } from "@DTOs/responses/deactivate-account-res.dto";
import { DeleteAccountResDTO } from "@DTOs/responses/delete-account-res.dto";
import { ResetPasswordResDTO } from "@DTOs/responses/reset-password-res.dto"
import { Observable } from "rxjs"

export interface IUser {
    sendEmailForgertPassword(email: ResetPasswordReqDTO): Observable<ResetPasswordResDTO>;
    resetPassword(password: ResetPasswordReqDTO, token: string, idUrl: string): Observable<ResetPasswordResDTO>;
    deactivateAccount(): Observable<DeactivateAccountResDTO>;
    deleteAccount(description: DeleteAccountReqDTO): Observable<DeleteAccountResDTO>;
}