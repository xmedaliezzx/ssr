import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-historique-prestataire-appointments',
  standalone: true,
  imports: [CommonModule,TreeSelectModule,DropdownModule,FormsModule,ReactiveFormsModule,PaginatorModule],
  templateUrl: './historique-prestataire-appointments.component.html',
  styleUrls: ['./historique-prestataire-appointments.component.scss']
})
export class HistoriquePrestataireAppointmentsComponent {
  selectedNodes: any;
  selectedOption!: any;
  singalForm:FormGroup 
  signal: any[]= ['Signaler'];
  constructor(private formBuilder: FormBuilder,) { }
  ngOnInit() {
    this.singalForm = this.formBuilder.group({
      selectedType: ['']
    });
  }

  

 

  get itemsOnCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.rdvData.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
  }


  rdvData: any[]= [
    {
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      age :'40 ans',
      startTime: '10:20',
      endTime: '16:20',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
    {
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '02 Janvier ',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      age :'40 ans',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
    {
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '02 Janvier',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      age :'40 ans',
      simpleCare: 10,
      shift: 30,
      total: 40,
      when: 'later'
    },
    {
      name: "Foulena",
      jobTitle: 'Infirmiere',
      age :'40 ans',
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
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      startDate: '02 Janvier',
      endDate: '17/02',
      startTime: '10:20',
      endTime: '16:20',
      age :'40 ans',
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
      age :'40 ans',
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
}
