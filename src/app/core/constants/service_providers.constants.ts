import { AuthentificationService } from '@features/patient/data/services/authentification.service';
import { GlobalFacadeService } from '@store/global/global-facade.service';
import {
  AUTH_SERVICE,
  GLOBAL_FACADE,
  PATIENT_SERVICE,
  SOCKET_SERVICE,
  USER_FACADE,
  USER_SERVICE,
} from './tokens.constants';
import { UserFacadeService } from '@store/user/user-facade.service';
import { UserService } from '@shared/services/user.service';
import { PatientService } from '@features/patient/data/services/patient.service';
import { SocketService } from '@features/patient/data/services/socket.service';

export const ServicesProviders = [
  // FACADES
  { provide: GLOBAL_FACADE, useClass: GlobalFacadeService },
  { provide: USER_FACADE, useClass: UserFacadeService },

  // SERVICES
  { provide: AUTH_SERVICE, useClass: AuthentificationService },
  { provide: USER_SERVICE, useClass: UserService },
  { provide: PATIENT_SERVICE, useClass: PatientService },
  { provide: SOCKET_SERVICE, useClass: SocketService },
];
