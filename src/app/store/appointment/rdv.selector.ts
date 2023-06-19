import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RDVState } from './rdv.state';

export const RDVFeatureSelector = createFeatureSelector<RDVState>('rdvReducer');

export const rdvDataSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.data
);

export const formConf = createSelector(RDVFeatureSelector, (c) => c.formConf);

export const instantRDV = createSelector(
  RDVFeatureSelector,
  (c) => c.instantRDV
);

export const prestataire = createSelector(
  RDVFeatureSelector,
  (c) => c.prestataire
);

export const stepSelector = createSelector(RDVFeatureSelector, (c) => c.step);

export const finalStepSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.finalStep
);

export const titleSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.formConf ? c.formConf.title : ''
);

export const familyMembersSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.family_members
);

export const tmpFamilyMemberSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.tmpFamilyMember
);

export const serviceSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.service
);

export const appointmentTypeSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.instantRDV
);

export const listServicesHasFilesSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.listServicesHasFiles
);

export const listServicesWithoutProfessionalChoiceSelector = createSelector(
  RDVFeatureSelector,
  (c) => c.listServicesWithoutProfessionalChoice
);