import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@features/prestataire/components/calendar/calendar.component';
import { StatisticsComponent } from '@features/prestataire/components/statistics/statistics.component';
import { AppelsComponent } from '@features/prestataire/components/appels/appels.component';
import { UpcomingComponent } from '@features/prestataire/components/upcoming/upcoming.component';
import { RendezvousComponent } from '@features/prestataire/components/rendezvous/rendezvous.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { UpcommingPFComponent } from '@features/prestataire/components/upcomming-pf/upcomming-pf.component';
import { RendezvousPFComponent } from '@features/prestataire/components/rendezvous-pf/rendezvous-pf.component';
import { AppelsPFComponent } from '@features/prestataire/components/appels-pf/appels-pf.component';
@Component({
  selector: 'app-pompesFunebres',
  standalone: true,
  imports: [CommonModule, CalendarComponent, FormsModule, NavbarComponent, InputSwitchModule, StatisticsComponent, AppelsPFComponent, UpcommingPFComponent, RendezvousPFComponent],
  templateUrl: './pompesFunebres.component.html',
  styleUrls: ['./pompesFunebres.component.scss']
})
export class PompesFunebresComponent implements OnInit {

  checked: boolean;
  object1 = {
    a: 'somestring',
    b: 42
  };

  ngOnInit(): void {
    this.objectEntries(this.object1)
  }
  objectEntries(obj: any): [string, any][] {
    console.log(obj);
    return Object.entries(obj);
  }
}
