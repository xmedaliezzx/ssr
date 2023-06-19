import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { EFFECTS, REDUCERS } from '@store/index';

import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogManagerComponent } from '@shared/containers/dialog-manager/dialog-manager.component';
import { DialogModule } from 'primeng/dialog';
import { LoadingComponent } from '@shared/containers/loading/loading.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServicesProviders } from '@core/constants/service_providers.constants';
import { PrestataireRatingComponent } from '@shared/dialogs/prestataire-rating/prestataire-rating.component';
import { LivraisonChoixComponent } from '@shared/dialogs/livraison-choix/livraison-choix.component';
import { SoinsChoixComponent } from '@shared/dialogs/soins-choix/soins-choix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from '@shared/containers/reset-password/reset-password.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TokenInterceptor } from '@core/interceptors/token.interceptor';
import { AppointmentCancellledSuccessfulComponent } from '@shared/dialogs/appointment-cancellled-successful/appointment-cancellled-successful.component';
import { BlockedAppointmentComponent } from '@shared/dialogs/blocked-appointment/blocked-appointment.component';
import { NotificationReminderComponent } from '@shared/dialogs/notification-reminder/notification-reminder.component';
import { OutherMemberComponent } from '@shared/dialogs/outher-member/outher-member.component';
import { ReportingListComponent } from '@shared/dialogs/reporting-list/reporting-list.component';
import { SuccessfulBookingComponent } from '@shared/dialogs/successful-booking/successful-booking.component';
import { WorningBlockedAppointmentComponent } from '@shared/dialogs/worning-blocked-appointment/worning-blocked-appointment.component';
import { NotAvailableAppointmentComponent } from '@shared/dialogs/not-available-appointment/not-available-appointment.component';
import { DeactivationConfirmationComponent } from '@shared/dialogs/deactivation-confirmation/deactivation-confirmation.component';
import { DeactivationReasonComponent } from '@shared/dialogs/deactivation-reason/deactivation-reason.component';
import { DeleteAccountComponent } from '@shared/dialogs/delete-account/delete-account.component';
import { MapselectorComponent } from '@shared/dialogs/mapselector/mapselector.component';
import { DeleteReasonComponent } from '@shared/dialogs/delete-reason/delete-reason.component';
import { PrestataireTypeComponent } from '@features/prestataire/containers/prestataire-type/prestataire-type.component';
import { PrestataireReportingListComponent } from '@shared/dialogs/prestataire-reporting-list/prestataire-reporting-list.component';
import { PrestataireCancelAppointementComponent } from '@shared/dialogs/prestataire-cancel-appointement/prestataire-cancel-appointement.component';
import { WarningExpirationAccountComponent } from '@shared/dialogs/warning-expiration-account/warning-expiration-account.component';
import { WarningTrialPeriodComponent } from '@shared/dialogs/warning-trial-period/warning-trial-period.component';
import { PatientMedicalCardComponent } from '@shared/dialogs/patient-medical-card/patient-medical-card.component';
import { DeleteMemberComponent } from '@shared/dialogs/delete-member/delete-member.component';
import { ServiceWorkerModule } from '@angular/service-worker';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function playerFactory() {
  return player;
}




@NgModule({
  declarations: [AppComponent, LoadingComponent, DialogManagerComponent],
  imports: [
    DialogModule,
    ToastModule,
    ResetPasswordComponent,
    PrestataireRatingComponent,
    MapselectorComponent,
    LivraisonChoixComponent,
    DeleteAccountComponent,
    SoinsChoixComponent,
    DeactivationConfirmationComponent,
    DeactivationReasonComponent,
    DeleteReasonComponent,
    NavbarComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppointmentCancellledSuccessfulComponent,
    BlockedAppointmentComponent,
    NotificationReminderComponent,
    OutherMemberComponent,
    ReportingListComponent,
    PrestataireReportingListComponent,
    PrestataireCancelAppointementComponent,
    WarningExpirationAccountComponent,
    WarningTrialPeriodComponent,
    PatientMedicalCardComponent,
    DeleteMemberComponent,
    SuccessfulBookingComponent,
    WorningBlockedAppointmentComponent,
    NotAvailableAppointmentComponent,
    PrestataireTypeComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot(EFFECTS),
    LottieModule.forRoot({ player: playerFactory }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: false,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    ...ServicesProviders,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
