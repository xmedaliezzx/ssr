import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-historique-appels-immediat',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,DropdownModule, PaginatorModule],
  templateUrl: './historique-appels-immediat.component.html',
  styleUrls: ['./historique-appels-immediat.component.scss']
})
export class HistoriqueAppelsImmediatComponent {
  selectedNodes: any;
  selectedOption!: any;
  singalForm:FormGroup 
  signal: any[]= ['sinaler'];
  constructor(private formBuilder: FormBuilder,) { }
  ngOnInit() {
    this.singalForm = this.formBuilder.group({
      selectedType: ['']
    });
  }
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

  totalRecords = this.rdvData.length;
  pageSize = 12; // Nombre d'éléments par page
  // Nombre total d'éléments
  currentPage = 1; // Page actuelle
  items = Array.from({ length: this.totalRecords }, (_, i) => `Item ${i + 1}`);

  get itemsOnCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.rdvData.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
  }
}
