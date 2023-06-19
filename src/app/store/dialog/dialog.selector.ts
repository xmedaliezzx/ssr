import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DialogState } from './dialog.state';

export const DialogFeatureSelector =
  createFeatureSelector<DialogState>('dialogReducer');

export const rdvTypeModal$$ = createSelector(DialogFeatureSelector, (c) => c.rdvTypeModal);
export const anotherModal$$ = createSelector(DialogFeatureSelector, (c) => c.anotherModal);
export const prestataireRatingModal$$ = createSelector(DialogFeatureSelector, (c) => c.prestataireRatingModal);
export const soinsChoixModal$$ = createSelector(DialogFeatureSelector, (c) => c.soinsChoixModal);
export const deactivationReasonModal$$ = createSelector(DialogFeatureSelector, (c) => c.deactivationReasonModal);
export const deactivationConfirmationModal$$ = createSelector(DialogFeatureSelector, (c) => c.deactivationConfirmationModal);

export const livraisonChoixModal$$ = createSelector(DialogFeatureSelector, (c) => c.livraisonChoixModal);
export const AppointmentCancellledSuccessfulModal$$ = createSelector(DialogFeatureSelector, (c) => c.AppointmentCancellledSuccessfulModal);
export const BlockedAppointmentModal$$ = createSelector(DialogFeatureSelector, (c) => c.BlockedAppointmentModal);
export const NotificationReminderModal$$ = createSelector(DialogFeatureSelector, (c) => c.NotificationReminderModal);
export const OutherMemberModal$$ = createSelector(DialogFeatureSelector, (c) => c.OutherMemberModal);
export const ReportingListModal$$ = createSelector(DialogFeatureSelector, (c) => c.ReportingListModal);
export const SuccessfulBookingModal$$ = createSelector(DialogFeatureSelector, (c) => c.SuccessfulBookingModal);
export const WorningBlockedAppointmentModal$$ = createSelector(DialogFeatureSelector, (c) => c.WorningBlockedAppointmentModal);
export const notAvailableAppointmentModal$$ = createSelector(DialogFeatureSelector, (c) => c.notAvailableAppointmentModal);
export const deleteAccountModal$$ = createSelector(DialogFeatureSelector, (c) => c.deleteAccountModal);
export const deleteReasonModal$$ = createSelector(DialogFeatureSelector, (c) => c.deleteReasonModal);
export const mapselectorComponentModal$$ = createSelector(DialogFeatureSelector, (c) => c.mapselectorComponentModal);
export const prestataireReportingListModal$$ = createSelector(DialogFeatureSelector, (c) => c.prestataireReportingListModal);
export const prestataireCancelAppointementModal$$ = createSelector(DialogFeatureSelector, (c) => c.prestataireCancelAppointementModal);
export const warningExpirationAccountModal$$ = createSelector(DialogFeatureSelector, (c) => c.warningExpirationAccountModal);
export const warningTrialPeriodModal$$ = createSelector(DialogFeatureSelector, (c) => c.warningTrialPeriodModal);
export const patientMedicalCardModal$$ = createSelector(DialogFeatureSelector, (c) => c.patientMedicalCardModal);
export const deleteMemberModal$$ = createSelector(DialogFeatureSelector, (c) => c.deleteMemberModal);
