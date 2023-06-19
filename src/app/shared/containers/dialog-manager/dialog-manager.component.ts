import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { CLOSE, OPEN } from '@store/dialog/dialog.action';
import {
  ReportingListModal$$,
  OutherMemberModal$$,
  NotificationReminderModal$$,
  AppointmentCancellledSuccessfulModal$$,
  BlockedAppointmentModal$$,
  anotherModal$$,
  livraisonChoixModal$$,
  prestataireRatingModal$$,
  rdvTypeModal$$,
  soinsChoixModal$$,
  SuccessfulBookingModal$$,
  WorningBlockedAppointmentModal$$,
  notAvailableAppointmentModal$$,
  deactivationReasonModal$$,
  deactivationConfirmationModal$$,
  deleteAccountModal$$,
  mapselectorComponentModal$$,
  deleteReasonModal$$,
  prestataireReportingListModal$$,
  prestataireCancelAppointementModal$$,
  warningExpirationAccountModal$$,
  warningTrialPeriodModal$$,
  patientMedicalCardModal$$,
  deleteMemberModal$$,
} from '@store/dialog/dialog.selector';

import { Observable, Subject, combineLatest, map, takeUntil } from 'rxjs';
import { StyleClassModule } from 'primeng/styleclass';
@Component({
  selector: 'app-dialog-manager',
  templateUrl: './dialog-manager.component.html',
  styleUrls: ['./dialog-manager.component.scss'],
})
export class DialogManagerComponent implements OnDestroy {
  rdvTypeModal$$: Observable<boolean> = this.store.select(rdvTypeModal$$);
  anotherModal$$: Observable<boolean> = this.store.select(anotherModal$$);
  prestataireRatingModal$$: Observable<boolean> = this.store.select(prestataireRatingModal$$);
  soinsChoixModal$$: Observable<boolean> = this.store.select(soinsChoixModal$$);
  deactivationConfirmationModal$$: Observable<boolean> = this.store.select(deactivationConfirmationModal$$);
  deactivationReasonModal$$: Observable<boolean> = this.store.select(deactivationReasonModal$$);
  deleteReasonModal$$: Observable<boolean> = this.store.select(deleteReasonModal$$);
  livraisonChoixModal$$: Observable<boolean> = this.store.select(livraisonChoixModal$$);
  AppointmentCancellledSuccessfulModal$$: Observable<boolean> = this.store.select(AppointmentCancellledSuccessfulModal$$);
  BlockedAppointmentModal$$: Observable<boolean> = this.store.select(BlockedAppointmentModal$$);
  NotificationReminderModal$$: Observable<boolean> = this.store.select(NotificationReminderModal$$);
  OutherMemberModal$$: Observable<boolean> = this.store.select(OutherMemberModal$$);
  ReportingListModal$$: Observable<boolean> = this.store.select(ReportingListModal$$);
  SuccessfulBookingModal$$: Observable<boolean> = this.store.select(SuccessfulBookingModal$$);
  WorningBlockedAppointmentModal$$: Observable<boolean> = this.store.select(WorningBlockedAppointmentModal$$);
  notAvailableAppointmentModal$$: Observable<boolean> = this.store.select(notAvailableAppointmentModal$$);
  deleteAccountModal$$: Observable<boolean> = this.store.select(deleteAccountModal$$);
  mapselectorComponentModal$$: Observable<boolean> = this.store.select(mapselectorComponentModal$$);
  prestataireReportingListModal$$: Observable<boolean> = this.store.select(prestataireReportingListModal$$);
  prestataireCancelAppointementModal$$: Observable<boolean> = this.store.select(prestataireCancelAppointementModal$$);
  warningExpirationAccountModal$$: Observable<boolean> = this.store.select(warningExpirationAccountModal$$);
  warningTrialPeriodModal$$: Observable<boolean> = this.store.select(warningTrialPeriodModal$$);
  patientMedicalCardModal$$: Observable<boolean> = this.store.select(patientMedicalCardModal$$);
  deleteMemberModal$$: Observable<boolean> = this.store.select(deleteMemberModal$$);

  observables: Observable<boolean>[] = [
    this.rdvTypeModal$$,
    this.anotherModal$$,
    this.prestataireRatingModal$$,
    this.soinsChoixModal$$,
    this.deactivationConfirmationModal$$,
    this.deactivationReasonModal$$,
    this.deleteReasonModal$$,
    this.livraisonChoixModal$$,
    this.AppointmentCancellledSuccessfulModal$$,
    this.BlockedAppointmentModal$$,
    this.NotificationReminderModal$$,
    this.OutherMemberModal$$,
    this.ReportingListModal$$,
    this.SuccessfulBookingModal$$,
    this.WorningBlockedAppointmentModal$$,
    this.notAvailableAppointmentModal$$,
    this.deleteAccountModal$$,
    this.mapselectorComponentModal$$,
    this.prestataireReportingListModal$$,
    this.prestataireCancelAppointementModal$$,
    this.warningExpirationAccountModal$$,
    this.warningTrialPeriodModal$$,
    this.patientMedicalCardModal$$,
    this.deleteMemberModal$$,
  ];
  rdvType: boolean = false;
  anotherModal: boolean = false;
  prestataireRatingModal: boolean = false;
  soinsChoixModal: boolean = false;
  deactivationConfirmationModal: boolean = false
  deactivationReasonModal: boolean = false;
  deleteReasonModal: boolean = false;

  livraisonChoixModal: boolean = false;
  AppointmentCancellledSuccessfulModal: boolean = false;
  BlockedAppointmentModal: boolean = false;
  NotificationReminderModal: boolean = false;
  OutherMemberModal: boolean = false;
  ReportingListModal: boolean = false;
  SuccessfulBookingModal: boolean = false;
  WorningBlockedAppointmentModal: boolean = false;
  notAvailableAppointmentModal: boolean = false;
  deleteAccountModal: boolean = false;
  mapselectorComponentModal: boolean = false;
  prestataireReportingListModal: boolean = false;
  prestataireCancelAppointementModal: boolean = false;
  warningExpirationAccountModal: boolean = false;
  warningTrialPeriodModal: boolean = false;
  patientMedicalCardModal: boolean = false;
  deleteMemberModal: boolean = false;


  Destroy: Subject<boolean> = new Subject();
  constructor(private store: Store<AppStateInterface>) {
    this.initialize();
  }

  initialize() {
    combineLatest(this.observables)
      .pipe(takeUntil(this.Destroy))
      .subscribe(([rdvTypeModal$$, anotherModal$$, prestataireRatingModal$$, soinsChoixModal$$, deactivationConfirmationModal$$, deactivationReasonModal$$, deleteReasonModal$$,
        livraisonChoixModal$$, AppointmentCancellledSuccessfulModal$$, BlockedAppointmentModal$$, NotificationReminderModal$$, OutherMemberModal$$, ReportingListModal$$,
        SuccessfulBookingModal$$, WorningBlockedAppointmentModal$$, notAvailableAppointmentModal$$, deleteAccountModal$$, mapselectorComponentModal$$, prestataireReportingListModal$$,
        prestataireCancelAppointementModal$$, warningExpirationAccountModal$$, warningTrialPeriodModal$$, patientMedicalCardModal$$, deleteMemberModal$$
      ]): boolean[] | void => {
        this.rdvType = rdvTypeModal$$;
        this.anotherModal = anotherModal$$;
        this.prestataireRatingModal = prestataireRatingModal$$;
        this.soinsChoixModal = soinsChoixModal$$;
        this.deactivationReasonModal = deactivationReasonModal$$;
        this.deleteReasonModal = deleteReasonModal$$;
        this.deleteAccountModal = deleteAccountModal$$;
        this.deactivationConfirmationModal = deactivationConfirmationModal$$;
        this.livraisonChoixModal = livraisonChoixModal$$;
        this.AppointmentCancellledSuccessfulModal = AppointmentCancellledSuccessfulModal$$;
        this.BlockedAppointmentModal = BlockedAppointmentModal$$;
        this.NotificationReminderModal = NotificationReminderModal$$;
        this.OutherMemberModal = OutherMemberModal$$;
        this.ReportingListModal = ReportingListModal$$;
        this.SuccessfulBookingModal = SuccessfulBookingModal$$;
        this.WorningBlockedAppointmentModal = WorningBlockedAppointmentModal$$;
        this.notAvailableAppointmentModal = notAvailableAppointmentModal$$;
        this.mapselectorComponentModal = mapselectorComponentModal$$;
        this.prestataireReportingListModal = prestataireReportingListModal$$;
        this.prestataireCancelAppointementModal = prestataireCancelAppointementModal$$;
        this.warningExpirationAccountModal = warningExpirationAccountModal$$;
        this.warningTrialPeriodModal = warningTrialPeriodModal$$;
        this.patientMedicalCardModal = patientMedicalCardModal$$;
        this.deleteMemberModal = deleteMemberModal$$;
      });
  }
  open(dialogName: string) {
    this.store.dispatch(OPEN({ dialogName: dialogName }));
  }
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

  ngOnDestroy(): void {
    this.Destroy.next(true);
    this.Destroy.complete();
  }
}
