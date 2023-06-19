import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DynamicChildLoaderDirective } from '@shared/directives/dynamic-child-loader.directive';
import { RendezVousComponent } from '../../../patient/components/rendez-vous/rendez-vous.component';
import { HistoriqueComponent } from '../../../patient/components/historique/historique.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { RendezVousPrestataireComponent } from '@features/prestataire/components/rendez-vous-prestataire/rendez-vous-prestataire.component';
import { HistoriquePrestataireAppointmentsComponent } from '@features/prestataire/components/historique-prestataire-appointments/historique-prestataire-appointments.component';


@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, TabViewModule, DynamicChildLoaderDirective, NavbarComponent],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  active!: boolean;
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;
  RendezVous = RendezVousPrestataireComponent
  Historique = HistoriquePrestataireAppointmentsComponent
  
  ngOnInit(): void {
    this.rendezVous();
  }
  loadComponent(component: any) {
    this.dynamicChild.viewContainerRef.clear();
    this.dynamicChild.viewContainerRef.createComponent(component);
  }


  rendezVous() {
    this.active = true;
    // // console.log(this.active);
    this.loadComponent(this.RendezVous)

  }

  historique() {
    this.active = false;
    // // console.log(this.active);
    this.loadComponent(this.Historique)
  }
}
