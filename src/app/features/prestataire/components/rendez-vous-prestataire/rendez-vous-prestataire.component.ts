import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendezvousListComponent } from '../rendezvous-list/rendezvous-list.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';
import { UpcommingListComponent } from '../upcomming-list/upcomming-list.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarPrestataireComponent } from '../calendar-prestataire/calendar-prestataire.component';
import { DetailsComponent } from '../details/details.component';


@Component({
    selector: 'app-rendez-vous-prestataire',
    standalone: true,
    templateUrl: './rendez-vous-prestataire.component.html',
    styleUrls: ['./rendez-vous-prestataire.component.scss'],
    imports: [CommonModule, RendezvousListComponent, UpcommingListComponent, DetailsComponent, CalendarPrestataireComponent]
})
export class RendezVousPrestataireComponent {
firstName: string = 'Bouhlel';
  lastName: string = 'Rochdi';

  rdvData: any[]= [

    {
      name: "Foulen",
      jobTitle: 'Ophtalmoloque',
      image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
    {
      name: "Foulena",
      jobTitle: 'Psychologue',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
    {
      name: "Foulena",
      jobTitle: 'gastrologue',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
    {
      name: "Foulen",
      jobTitle: 'anesthesite',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'soon'
    },
    {
      name: "Foulen",
      jobTitle: 'anesthesite',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '15/02',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
  ]
}
