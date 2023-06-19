import { createReducer, on } from '@ngrx/store';
import * as fromRDV from './rdv.action';
import { RDVState } from './rdv.state';

export const initialState: RDVState = {
  step: 0,
  finalStep: 0,
  service: {},
  instantRDV: false,
  prestataire: '',
  data: {},
  formConf: {
    fields: [],
    hasFiles: false,
  },
  family_members: [],
  tmpFamilyMember: {},
  listServicesHasFiles: [
    'medecin_generaliste',
    'medecin_physique',
    'medecin_anti_douleur',
    'medecin_cardiologue',
    'medecin_neurologue',
    'medecin_pneumologue',
    'medecin_pediatrie',
    'infirmier',
    'technicien_reanimation',
    'kinesitherapeute',
    'aide_soignant',
    'auxiliaire_vie',
    'laboratoires',
    'parapharmacie'
  ],
  listServicesWithoutProfessionalChoice: [
    'baby_sitting',
    'Transport_medical',
    'maison_retraite',
    'pomp_funebre'
  ]
};

export const rdvReducer = createReducer(
  initialState,
  on(fromRDV.selectService, (state, { formConf }) => ({
    ...state,
    formConf: formConf,
  })),
  on(fromRDV.nextAction, (state, { data }) => {
    return {
      ...state,
      data: { ...state.data, ...data },
      step: state.step + 1,
    };
  }),
  on(fromRDV.previousAction, (state, { data }) => ({
    ...state,
    data: { ...state.data, ...data },
    step: state.step - 1,
  })),

  on(fromRDV.finalStepAction, (state, { data }) => ({
    ...state,
    data: { ...state.data, ...data },
  })),

  on(fromRDV.setFinalStep, (state, { step, finalStep }) => ({
    ...state,
    finalStep: finalStep,
    step: step
  })),

  on(fromRDV.setFamilyMembers, (state, { family_members }) => ({
    ...state,
    family_members: family_members
  })),

  on(fromRDV.setNewFamilyMember, (state, { newMember }) => {
    // let newArray = [...state.family_members];
    // newArray.push(newMember);
    // return {
    //   ...state,
    //   family_members: newArray,
    // };
    return {
      ...state,
      tmpFamilyMember: newMember
    }
  }),

  on(fromRDV.setExistingFamilyMember, (state, { memberId }) => {
    console.log('memberID: ', memberId)
    return {
      ...state,
      data: { ...state.data, memberId: memberId }
    }
  }),

  // on(fromRDV.removeFamilyMember, (state) => {
  //   return {
  //     ...state,
  //     data: { ...state.data, memberId: '' }
  //   }
  // }),

  on(fromRDV.setService, (state, { service }) => ({
    ...state,
    service: service
  })),

  on(fromRDV.setAppointmentType, (state, { appointmentType }) => ({
    ...state,
    instantRDV: appointmentType === 'immediate' ? true : false,
    finalStep: appointmentType === 'immediate' ? state.finalStep - 1 : state.finalStep,
  }))
);
