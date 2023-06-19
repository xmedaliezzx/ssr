import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from './core/constants/routes.constants';
import { UserTypeGuard } from '@core/guards/usertype.guard';
import { NgAuthGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: RoutesConstants.home.route,
    // canActivate: [NgAuthGuard],
    loadComponent: () =>
      import(
        './features/patient/patient-navigator/patient-navigator.component'
      ).then((m) => m.PatientNavigatorComponent),
    title: RoutesConstants.home.title,
    data: RoutesConstants.home.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./shared/containers/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
  },
  {
    path: RoutesConstants.prestataire.route,
    loadComponent: () =>
      import(
        './features/prestataire/prestataire-navigator/prestataire-navigator.component'
      ).then((m) => m.PrestataireNavigatorComponent),
    title: RoutesConstants.prestataire.title,
    data: RoutesConstants.prestataire.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/prestataire/containers/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
      },
    ],
  },
  {
    path: RoutesConstants.auth.route,
    loadComponent: () =>
      import('./shared/containers/auth/auth.component').then(
        (m) => m.AuthComponent
      ),
    title: RoutesConstants.auth.title,
    data: RoutesConstants.auth.seo,
    children: [
      {
        path: '',
        redirectTo: RoutesConstants.signin.route,
        pathMatch: 'full',
      },
      {
        path: RoutesConstants.signin.route,
        loadComponent: () =>
          import('./shared/containers/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
      },
      {
        path: RoutesConstants.user_type.route,
        loadComponent: () =>
          import('./shared/components/auth-choice/auth-choice.component').then(
            (m) => m.AuthChoiceComponent
          ),
        title: RoutesConstants.user_type.title,
        data: RoutesConstants.user_type.seo,
      },
      {
        path: RoutesConstants.signup_patient.route,
        loadComponent: () =>
          import('./shared/containers/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
        title: RoutesConstants.signup_patient.title,
        data: RoutesConstants.signup_patient.seo,
      },
      {
        // To change
        path: RoutesConstants.signup_prestataire.route,
        loadComponent: () =>
          import('./features/prestataire/containers/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
        title: RoutesConstants.signup_prestataire.title,
        data: RoutesConstants.signup_prestataire.seo,
      },
      {
 
        path: RoutesConstants.prestataire_type.route,
        loadComponent: () =>
          import('./features/prestataire/containers/prestataire-type/prestataire-type.component').then(
            (m) => m
            .PrestataireTypeComponent
          ),
        title: RoutesConstants.prestataire_type.title,
        data: RoutesConstants.prestataire_type.seo,
      },
    ],
  },
  {
    path: RoutesConstants.forget_password.route,
    loadComponent: () =>
      import(
        './shared/containers/reset-password/reset-password.component'
      ).then((m) => m.ResetPasswordComponent),
    title: RoutesConstants.forget_password.title,
    data: RoutesConstants.forget_password.seo,
    children: [],
  },
  {
    path: RoutesConstants.reset_password_successful.route,
    loadComponent: () =>
      import(
        './shared/containers/reset-password-successful/reset-password-successful.component'
      ).then((m) => m.ResetPasswordSuccessfulComponent),
    title: RoutesConstants.reset_password_successful.title,
    data: RoutesConstants.reset_password_successful.seo,
    children: [],
  },
  {
    path: RoutesConstants.verify_token_password.route,
    loadComponent: () =>
      import(
        './shared/containers/reset-password-token-verifier/reset-password-token-verifier.component'
      ).then((m) => m.ResetPasswordTokenVerifierComponent),
    title: RoutesConstants.reset_password_successful.title,
    data: RoutesConstants.reset_password_successful.seo,
    children: [
      // {
      //   path: '',
      //   redirectTo: RoutesConstants.set_reset_password.route,
      //   pathMatch: 'full',
      // },
      {
        path: RoutesConstants.set_reset_password.route,
        loadComponent: () =>
          import(
            './shared/containers/set-reset-password/set-reset-password.component'
          ).then((m) => m.SetResetPasswordComponent),
        title: RoutesConstants.set_reset_password.title,
        data: RoutesConstants.set_reset_password.seo,
      },
      {
        path: RoutesConstants.reset_password_successful.route,
        loadComponent: () =>
          import(
            './shared/containers/reset-password-successful/reset-password-successful.component'
          ).then((m) => m.ResetPasswordSuccessfulComponent),
        title: RoutesConstants.reset_password_successful.title,
        data: RoutesConstants.reset_password_successful.seo,
      },
    ],
  },
  {
    path: RoutesConstants.email_expired.route,
    loadComponent: () =>
      import('./shared/containers/email-expired/email-expired.component').then(
        (m) => m.EmailExpiredComponent
      ),
    title: RoutesConstants.email_expired.title,
    data: RoutesConstants.email_expired.seo,
    children: [],
  },
  {
    path: RoutesConstants.check_inbox.route,
    loadComponent: () =>
      import('./shared/containers/check-inbox/check-inbox.component').then(
        (m) => m.CheckInboxComponent
      ),
    title: RoutesConstants.check_inbox.title,
    data: RoutesConstants.check_inbox.seo,
    children: [],
  },
  {
    path: RoutesConstants.success_email_verfication.route,
    loadComponent: () =>
      import(
        './shared/containers/success-email-verification/success-email-verification.component'
      ).then((m) => m.SuccessEmailVerificationComponent),
    title: RoutesConstants.success_email_verfication.title,
    data: RoutesConstants.success_email_verfication.seo,
    children: [],
  },
  {
    path: RoutesConstants.edit_profile.route,
    loadComponent: () =>
      import(
        './features/patient/containers/edit-profile/edit-profile.component'
      ).then((m) => m.EditProfileComponent),
    title: RoutesConstants.edit_profile.title,
    data: RoutesConstants.edit_profile.seo,
    canActivate: [NgAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'Profil',
        pathMatch: 'full',
        // loadComponent: () =>
        //   import(
        //     './features/patient/components/profil-form/profil-form.component'
        //   ).then((m) => m.ProfilFormComponent),
      },
      {
        path: 'Profil',
        loadComponent: () =>
          import(
            './features/patient/components/profil-form/profil-form.component'
          ).then((m) => m.ProfilFormComponent),
      },
      {
        path: 'reclamation',
        loadComponent: () =>
          import(
            './features/patient/components/reclamation-form/reclamation-form.component'
          ).then((m) => m.ReclamationFormComponent),
      },
      {
        path: 'personnal',
        loadComponent: () =>
          import(
            './features/patient/components/perso-form/perso-form.component'
          ).then((m) => m.PersoFormComponent),
      },
      {
        path: 'password',
        loadComponent: () =>
          import(
            './features/patient/components/password-form/password-form.component'
          ).then((m) => m.PasswordFormComponent),
      },
      {
        path: 'phone',
        loadComponent: () =>
          import(
            './features/patient/components/phonenumber-form/phonenumber-form.component'
          ).then((m) => m.PhonenumberFormComponent),
      },
      {
        path: 'email',
        loadComponent: () =>
          import(
            './features/patient/components/email-form/email-form.component'
          ).then((m) => m.EmailFormComponent),
      },
      {
        path: 'manage-account',
        loadComponent: () =>
          import(
            './features/patient/components/manage-account/manage-account.component'
          ).then((m) => m.ManageAccountComponent),
      },
      
    ],
  },
  {
    path: RoutesConstants.edit_patien_member.route,
    loadComponent: () =>
      import(
        './shared/components/patientform/update-patient-member/update-patient-member.component'
      ).then((m) => m.UpdatePatientMemberComponent),
    title: RoutesConstants.edit_patien_member.title,
    data: RoutesConstants.edit_patien_member.seo,
    canActivate: [NgAuthGuard],
  },
  {
    path: RoutesConstants.list_healthcare.route,
    loadComponent: () =>
      import(
        './features/patient/components/list-healthcare/list-healthcare.component'
      ).then((m) => m.ListHealthcareComponent),
    title: RoutesConstants.list_healthcare.title,
    data: RoutesConstants.list_healthcare.seo,
  },
  {
    path: RoutesConstants.reclamation.route,
    loadComponent: () =>
      import(
        './features/patient/containers/reclamation/reclamation.component'
      ).then((m) => m.ReclamationComponent),
    title: RoutesConstants.reclamation.title,
    data: RoutesConstants.reclamation.seo,
  },
  {
    path: RoutesConstants.dashboard.route,
    loadComponent: () =>
      import(
        './features/prestataire/containers/dashboard/dashboard.component'
      ).then((m) => m.DashboardComponent),
    title: RoutesConstants.dashboard.title,
    data: RoutesConstants.dashboard.seo,
  },
  {
    path: RoutesConstants.pompesFunebres.route,
    loadComponent: () =>
      import(
        './features/prestataire/containers/pompesFunebres/pompesFunebres.component'
      ).then((m) => m.PompesFunebresComponent),
    title: RoutesConstants.pompesFunebres.title,
    data: RoutesConstants.pompesFunebres.seo,
  },
  {
    path: RoutesConstants.appelsimmediats.route,
    loadComponent: () =>
      import(
        './features/prestataire/containers/appels-immediat/appels-immediat.component'
      ).then((m) => m.AppelsImmediatComponent),
    title: RoutesConstants.appelsimmediats.title,
    data: RoutesConstants.appelsimmediats.seo,
  },
  {
    path: RoutesConstants.prestataireAppointments.route,
    loadComponent: () =>
      import(
        './features/prestataire/containers/appointments/appointments.component'
      ).then((m) => m.AppointmentsComponent),
    title: RoutesConstants.prestataireAppointments.title,
    data: RoutesConstants.prestataireAppointments.seo,
  },
  {
    path: RoutesConstants.appointment.route,
    loadComponent: () =>
      import(
        './features/patient/containers/rdv-appointment/rdv-appointment.component'
      ).then((m) => m.RdvAppointmentComponent),
    title: RoutesConstants.appointment.title,
    data: RoutesConstants.appointment.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/patient/containers/rdv-appointment/rdv-appointment.component'
          ).then((m) => m.RdvAppointmentComponent),
      }
    ],
  },
  {
    path: RoutesConstants.resultSearch.route,
    loadComponent: () =>
      import(
        './features/patient/components/result-search/result-search.component'
      ).then((m) => m.ResultSearchComponent),
    title: RoutesConstants.resultSearch.title,
    data: RoutesConstants.resultSearch.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/patient/components/result-search/result-search.component'
          ).then((m) => m.ResultSearchComponent),
      }
    ],
  },
  {
    path: RoutesConstants.my_appointments.route,
    loadComponent: () =>
      import(
        './features/patient/components/appointments/appointments.component'
      ).then((m) => m.AppointmentsComponent),
    title: RoutesConstants.my_appointments.title,
    data: RoutesConstants.my_appointments.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/patient/containers/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
  },

  {
    path: RoutesConstants.reservation.route,
    loadComponent: () =>
      import(
        './features/patient/containers/reservation/reservation.component'
      ).then((m) => m.ReservationComponent),
    title: RoutesConstants.reservation.title,
    data: RoutesConstants.reservation.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/patient/containers/reservation/reservation.component'
          ).then((m) => m.ReservationComponent),
      },
    ],
  },
  {
    path: RoutesConstants.feedback.route,
    loadComponent: () =>
      import(
        './features/patient/containers/feedback/feedback.component'
      ).then((m) => m.FeedbackComponent),
    title: RoutesConstants.feedback.title,
    data: RoutesConstants.feedback.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/patient/containers/feedback/feedback.component'
          ).then((m) => m.FeedbackComponent),
      },
    ],
  },
  {
    path: RoutesConstants.iteneraryFeedback.route,
    loadComponent: () =>
      import(
        './features/patient/containers/itenerary-follow/itenerary-follow.component'
      ).then((m) => m.IteneraryFollowComponent),
    title: RoutesConstants.iteneraryFeedback.title,
    data: RoutesConstants.iteneraryFeedback.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/patient/containers/itenerary-follow/itenerary-follow.component'

          ).then((m) => m.IteneraryFollowComponent),
      },
    ],
  },
  {
    path: RoutesConstants.youAre.route,
    loadComponent: () =>
      import(
        './shared/containers/you-are/you-are.component'
      ).then((m) => m.YouAreComponent),
    title: RoutesConstants.youAre.title,
    data: RoutesConstants.youAre.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './shared/containers/you-are/you-are.component'

          ).then((m) => m.YouAreComponent),
      },
    ],
  },
  {
    path: RoutesConstants.prices_statistics.route,
    loadComponent: () =>
      import(
        './features/prestataire/containers/prix-statistiques/prix-statistiques.component'
      ).then((m) => m.PrixStatistiquesComponent),
    title: RoutesConstants.prices_statistics.title,
    data: RoutesConstants.prices_statistics.seo,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/prestataire/containers/prix-statistiques/prix-statistiques.component'

          ).then((m) => m.PrixStatistiquesComponent),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
