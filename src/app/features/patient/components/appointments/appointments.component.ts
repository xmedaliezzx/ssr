import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DynamicChildLoaderDirective } from '@shared/directives/dynamic-child-loader.directive';
import { RendezVousComponent } from '../rendez-vous/rendez-vous.component';
import { HistoriqueComponent } from '../historique/historique.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';


@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule,NavbarComponent, TabViewModule, DynamicChildLoaderDirective],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  active!: boolean;
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;
  RendezVous = RendezVousComponent
  Historique = HistoriqueComponent

  ngOnInit(): void {
    this.rendezVous();
  }
  loadComponent(component: any) {
    this.dynamicChild.viewContainerRef.clear();
    this.dynamicChild.viewContainerRef.createComponent(component);  
  }


  rendezVous() {
    this.active = true;
    this.loadComponent(this.RendezVous)

  }

  historique() {
    this.active = false;
    this.loadComponent(this.Historique)
  }

}
