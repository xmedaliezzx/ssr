import { createAction, props } from '@ngrx/store';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';

export const selectService = createAction(
  '[RDV] SelectService',
  props<{ formConf: DynamicForm }>()
);

export const nextAction = createAction('[RDV] Next', props<{ data: any }>());

export const previousAction = createAction(
  '[RDV] Previous',
  props<{ data: any }>()
);

export const finalStepAction = createAction(
  '[RDV] finalStep',
  props<{ data: any }>()
);

export const setFinalStep = createAction(
  '[RDV] Final Step',
  props<{ step: number; finalStep: number }>()
);

export const setAppointmentType = createAction('[RDV] Set Appointment Type', props<{ appointmentType: string }>());

export const createAppointement = createAction('[RDV] Create Appointement');
export const createAppointementSuccess = createAction(
  '[RDV] Appointement success',
  props<{ data: any }>()
);
export const createAppointementFailure = createAction(
  '[RDV] Appointement failure',
  props<{ error: any }>()
);

export const setFamilyMembers = createAction(
  '[RDV] Set Family Members',
  props<{ family_members: any[] }>()
);

export const setNewFamilyMember = createAction(
  '[RDV] Set New Family Member',
  props<{ newMember: {} }>()
);

export const setExistingFamilyMember = createAction(
  '[RDV] Set Existing Family Member',
  props<{ memberId: string }>()
);

export const removeFamilyMember = createAction(
  '[RDV] Set Existing Family Member'
);

export const setService = createAction(
  '[RDV setService',
  props<{ service: any }>()
);
