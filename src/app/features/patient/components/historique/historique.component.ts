import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {
  // firstName: string = 'Bouhlel';
  // lastName: string = 'Rochdi';

  rdvData: any[]= [
    {
      name: "Foulena",
      jobTitle: 'Infirmiere',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '10 Mars ',
      endDate: '10 Mars ',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'soon'
    },
    {
      name: "Foulen",
      jobTitle: 'Infirmier',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '10 Mars',
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
      jobTitle: 'Infirmier',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '02 Janvier ',
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
      jobTitle: 'Infirmier',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '02 Janvier',
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
