import { Field } from './field.config';

export interface DynamicForm {
  title?: string;
  fields: Field[];
  hasFiles: boolean;
}
