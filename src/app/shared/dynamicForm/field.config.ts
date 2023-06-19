export interface Field {
  type: string;
  disabled: boolean;
  name: string;
  activationFieldName?: string;
  activationValue?: any;
  children?: any;
  successValue?: any;
  failValue?: any;
  label?: string;
  numberOfMonths?: number;
  readonlyInput?: boolean;
  value?: any;
  title?: string;
  description?: string;
  placeholder?: string;
  options?: any[];
  width?: string;
  mobileWidth?: string;
  mobileOrder: number ;
  desktopOrder: number ;
  flex?: {
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
  };
  dateRules?: {
    minDate?: string ;
    maxDate?: Date ;
  };
  rules?: {
    required?: true;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  classes?: {
    styleClass: string;
    panelStyleClass: string;
  };
}
