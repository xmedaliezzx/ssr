import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { HomeGuideComponent } from '@features/patient/components/homeGuide/home-guide/home-guide.component';
import { RdvAppointmentComponent } from '@features/patient/containers/rdv-appointment/rdv-appointment.component';
import { FeedBacksComponent } from '@features/patient/components/feed-backs/feed-backs.component';
import { AboutComponent } from '@features/patient/components/about/about/about.component';
import { HomeSearchServiceComponent } from '@features/patient/components/home-search-service/home-search-service.component';
import { ServicesComponent } from '@features/patient/components/homeServices/services.component';
import { CitiesComponent } from '@features/patient/components/cities/cities/cities.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthComponent } from '@shared/containers/auth/auth.component';
import { MessageService } from 'primeng/api';
import { ListHealthcareComponent } from '@features/patient/components/list-healthcare/list-healthcare.component';
import { PatientformComponent } from '@shared/components/patientform/patientform/patientform.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AuthComponent,
    HomeGuideComponent,
    RdvAppointmentComponent,
    FeedBacksComponent,
    HomeGuideComponent,
    AboutComponent,
    NavbarComponent,
    HomeSearchServiceComponent,
    ServicesComponent,
    FooterComponent,
    CitiesComponent,
    ListHealthcareComponent,
    PatientformComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  _toastr = inject(MessageService);
  show() {
    this._toastr.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
  show2() {
    this._toastr.add({
      severity: 'error',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
