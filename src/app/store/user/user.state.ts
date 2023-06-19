import { User } from '@models/user.model';

export enum ACTIVE_INTERFACE {
  PATIENT = 'PATIENT',
  PRESTATAIRE = 'PRESTATAIRE',
}
export interface UserState {
  isAppLoading: boolean;
  user: User;
  activeInterface: ACTIVE_INTERFACE;
  access_token: string;
  refresh_token: string;
  token_email: string;
  id_email: string;
  typePrestataire:string
}
