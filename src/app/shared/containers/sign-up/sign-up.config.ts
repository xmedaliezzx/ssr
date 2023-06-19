import { FieldType } from '@shared/dynamicForm/FieldType';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';
export const SIGN_UP:DynamicForm = {
  hasFiles: false,
  fields: [
    {
      type: FieldType.input,
      disabled: false,
      name: 'firstname',
      label: 'Nom',
      value: '',
      placeholder: 'Ben foulen',
      width: '100%',
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
      width: '100%',
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
      width: '100%',
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
    // {
    //   type: FieldType.input,
    //   disabled: false,
    //   name: 'address',
    //   label: 'Adresse',
    //   value: '',
    //   placeholder: 'rue foulen',
    //   width: '100%',
    //   mobileWidth: '100%',
    //   mobileOrder: 2,
    //   desktopOrder: 2,
    //   flex: {
    //     direction: 'row',
    //   },
    //   rules: {
    //     required: true,
    //   }
    // },
    {
      type: FieldType.singleselection,
      disabled: false,
      name: 'gender',
      label: 'Gendre',
      value: '',
      options: ['Male', 'Female', 'Other'],
      width: '100%',
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
      type: FieldType.numberbox,
      disabled: false,
      name: 'cin',
      label: 'Numéro CIN',
      value: '',
      placeholder: '0123....789',
      width: '100%',
      mobileWidth: '100%',
      mobileOrder: 5,
      desktopOrder: 5,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true,
        minLength: 9,
        maxLength: 9,
      }
    },
    {
      type: FieldType.input,
      disabled: false,
      name: 'phoneNumber',
      label: 'Numéro de téléphone',
      value: '',
      placeholder: '03 123 456',
      width: '100%',
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
      width: '100%',
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
    {
      type: FieldType.numberbox,
      disabled: false,
      name: 'postal',
      label: 'Code postal',
      value: '',
      placeholder: '1001',
      width: '50%',
      mobileWidth: '100%',
      mobileOrder: 9,
      desktopOrder: 9,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
    {
      type: FieldType.radiobuttons,
      disabled: false,
      name: 'hasAllergie',
      label: 'Avez vous une allergie?',
      value: '',
      width: '100%',
      mobileWidth: '100%',
      mobileOrder: 10,
      desktopOrder: 10,
      options: ['Oui', 'Non'],
      flex: {
        direction: 'row',
      },
    },
    {
      activationFieldName: 'hasAllergie',
      activationValue: 'Oui',
      type: FieldType.input,
      disabled: false,
      name: `allergie`,
      label: ``,
      placeholder: 'exp : Péniciline,autre...',
      value: '',
      width: '100%',
      mobileOrder: 11,
      desktopOrder: 11,
      mobileWidth: '100%',
      rules: {
        required: true
      }
    },
    {
      type: FieldType.input,
      disabled: false,
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: 'example@yahoo.fr',
      width: '100%',
      mobileWidth: '100%',
      mobileOrder: 12,
      desktopOrder: 12,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true,
        email: true
      }
    },
    {
      type: FieldType.password,
      disabled: false,
      name: 'password',
      label: 'Mot de passe',
      value: '',
      placeholder: '',
      width: '100%',
      mobileWidth: '100%',
      mobileOrder: 13,
      desktopOrder: 13,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
    {
      type: FieldType.password,
      disabled: false,
      name: 'confirmPassword',
      label: 'Confirmer le mot de passe',
      value: '',
      placeholder: '',
      width: '100%',
      mobileWidth: '100%',
      mobileOrder: 14,
      desktopOrder: 14,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
    {
      type: FieldType.checkbox,
      disabled: false,
      name: 'conditions_generales',
      label: `Je reconnais avoir lu <a href=""> les conditions générales d'utilisation</a> et les accepte, <a href=""> la politique de protection</a> des données et consent au traitement de mes données dans le cadre du service`,
      value: false,
      successValue: true,
      failValue: false,
      width: '100%',
      mobileWidth: '100%',
      mobileOrder: 15,
      desktopOrder: 15,
      flex: {
        direction: 'row',
      },
      rules: {
        required: true
      }
    },
  ],
};