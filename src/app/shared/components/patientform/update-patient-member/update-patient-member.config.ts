
import { FieldType } from '@shared/dynamicForm/FieldType';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';

export const PATIENT_MEMBER:DynamicForm = {
  hasFiles: false,
  fields: [
    {
      type: FieldType.input,
      disabled: false,
      name: 'firstname',
      label: 'Nom',
      value: '',
      placeholder: 'Ben foulen',
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 1,
      desktopOrder: 1,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true,
        minLength: 3,
        maxLength: 20,
      }
    },
    {
      type: FieldType.input,
      disabled: false,
      name: 'lastname',
      label: 'Prénom',
      value: '',
      placeholder: 'Foulen',
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 2,
      desktopOrder: 2,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true,
        minLength: 3,
        maxLength: 20,
      }
    },
    {
      type: FieldType.datepicker,
      disabled: false,
      name: 'birthDate',
      label: 'Date de naissance',
      value: '',
      placeholder: '01/12/1980',
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 3,
      desktopOrder: 3,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true,
      }
    },
    {
      type: FieldType.singleselection,
      disabled: false,
      name: 'gender',
      label: 'Gendre',
      value: '',
      options: ['Male', 'Female', 'Other'],
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 4,
      desktopOrder: 4,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true,
      }
    },
    {
      type: FieldType.input,
      disabled: false,
      name: 'phoneNumber',
      label: 'Numéro de téléphone',
      value: '',
      placeholder: '03 123 456',
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 6,
      desktopOrder: 6,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
    {
      type: FieldType.input,
      disabled: false,
      name: 'address',
      label: 'Adresse',
      value: '',
      placeholder: 'Av. Habib Bourguiba, Sousse, Tunisie',
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 7,
      desktopOrder: 7,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
    {
      type: FieldType.singleselection,
      disabled: false,
      name: 'city',
      label: 'Ville',
      value: '',
      options: ['Sousse', 'Tunis', 'Bizerte', 'Sfax', 'Monastir', 'Mahdia', 'Kairouan', 'Gabes', 'Gafsa', 'Tozeur', 'Kebili', 'Tataouine', 'Medenine', 'Nabeul', 'Beja', 'Jendouba', 'Kef', 'Siliana', 'Zaghouan', 'Sidi Bouzid', 'Manouba', 'Ben Arous'],
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 8,
      desktopOrder: 8,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
  ],
};