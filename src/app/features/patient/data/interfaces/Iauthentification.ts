import { LoginReqDTO } from "@DTOs/requests/login-req.dto";
import { RegisterReqDTO } from "@DTOs/requests/register.dto";
import { LoginResDTO } from "@DTOs/responses/login-res.dto";
import { RegisterResDTO } from "@DTOs/responses/register-res.dto";
import { Observable } from "rxjs";

export interface IAuthentification {
    signin(LoginReq:LoginReqDTO):Observable<LoginResDTO>
    signup(RegisterReq:RegisterReqDTO):Observable<RegisterResDTO>
}