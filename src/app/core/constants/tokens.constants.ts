import { InjectionToken } from '@angular/core';
import { IPatient } from '@features/patient/data/interfaces/Ipatient';
import { ISocket } from '@features/patient/data/interfaces/Isocket';
import { AuthentificationService } from '@features/patient/data/services/authentification.service';
import { PatientService } from '@features/patient/data/services/patient.service';
import { SocketService } from '@features/patient/data/services/socket.service';
import { UserService } from '@shared/services/user.service';
import { GlobalFacadeService } from '@store/global/global-facade.service';
import { UserFacadeService } from '@store/user/user-facade.service';

// SERVICES TOKENS
export const AUTH_SERVICE = new InjectionToken<AuthentificationService>(
  'AuthentificationService'
);
export const USER_SERVICE = new InjectionToken<UserService>('UserService');
export const PATIENT_SERVICE: InjectionToken<IPatient> = new InjectionToken<PatientService>('PatientService');
export const SOCKET_SERVICE = new InjectionToken<SocketService>('SocketService');

//FACADE TOKENS
export const GLOBAL_FACADE = new InjectionToken<GlobalFacadeService>(
  'GlobalFacadeService'
);
export const USER_FACADE = new InjectionToken<UserFacadeService>(
  'UserFacadeService'
);
