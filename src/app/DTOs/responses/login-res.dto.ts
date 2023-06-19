import { User } from '@models/user.model';

export interface LoginResDTO {
  success: boolean;
  message: string;
  err: string;
  data: {
    access_token: string;
    refresh_token: string;
    user: User;
  };
}
