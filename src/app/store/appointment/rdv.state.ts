import { User } from '@models/user.model';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';

export interface RDVState {
  step: number;
  finalStep: number;
  service : any ;
  instantRDV: boolean;
  prestataire: string;
  formConf: DynamicForm;
  data : any;
  family_members : Partial<User>[];
  tmpFamilyMember : Partial<User>;
  listServicesHasFiles : string[];
  listServicesWithoutProfessionalChoice : string[];
}
