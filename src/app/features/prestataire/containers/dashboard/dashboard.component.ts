import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@features/prestataire/components/calendar/calendar.component';
import { StatisticsComponent } from '@features/prestataire/components/statistics/statistics.component';
import { AppelsComponent } from '@features/prestataire/components/appels/appels.component';
import { UpcomingComponent } from '@features/prestataire/components/upcoming/upcoming.component';
import { RendezvousComponent } from '@features/prestataire/components/rendezvous/rendezvous.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CalendarComponent,FormsModule, NavbarComponent,InputSwitchModule, StatisticsComponent, AppelsComponent,UpcomingComponent, RendezvousComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   checked: boolean;
}
