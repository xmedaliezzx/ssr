import { createReducer, on } from '@ngrx/store';
import { DialogState } from './dialog.state';
import * as  fromDIALOG from './dialog.action';


export const initialState: DialogState = {
  rdvTypeModal: false,
  anotherModal: false,
  prestataireRatingModal :false,
  soinsChoixModal :false,
  deactivationReasonModal :false,
  deleteReasonModal :false,
  deactivationConfirmationModal : false,
  livraisonChoixModal :false,
  AppointmentCancellledSuccessfulModal :false,
  BlockedAppointmentModal : false,
  NotificationReminderModal :false,
  OutherMemberModal: false,
  ReportingListModal: false,
  SuccessfulBookingModal: false,
  WorningBlockedAppointmentModal: false,
  notAvailableAppointmentModal :false,
  deleteAccountModal :false,
  mapselectorComponentModal :false,
  prestataireReportingListModal: false,
  prestataireCancelAppointementModal: false,
  warningExpirationAccountModal: false,
  warningTrialPeriodModal: false,
  patientMedicalCardModal: false,
  deleteMemberModal: false,
};

export const dialogReducer = createReducer(
  initialState,
  on(fromDIALOG.OPEN, (state,{dialogName}) => ({
    ...state,
    [dialogName]: true,
  })),
  on(fromDIALOG.CLOSE, (state,{dialogName}) => ({
    ...state,
    [dialogName]: false,
  })),

);
