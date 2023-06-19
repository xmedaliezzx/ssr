import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-prix',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.scss']
})
export class PrixComponent {
  data =  [
  
   
    {
        id: '1003',
        prix: '70 TND',
        name: 'Consultation',
    },
    {
        id: '1004',
        prix: '50 TND',
        name: 'Déclaration de décés',
    
    },
]
}
