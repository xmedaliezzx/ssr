import { User } from "@models/user.model";

export interface UpdatePersoInfoResDTO {
  success: boolean;
  message: string;
  err: string;
  data: {
    user : User
  };
}
