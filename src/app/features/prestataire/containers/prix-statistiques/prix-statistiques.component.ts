import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesStatisticsComponent } from '../prices-statistics/prices-statistics.component';
import { HistoriqueAppelsImmediatComponent } from '@features/patient/components/historique-appels-immediat/historique-appels-immediat.component';
import { ImmediatsComponent } from '@features/prestataire/components/immediats/immediats.component';
import { DynamicChildLoaderDirective } from '@shared/directives/dynamic-child-loader.directive';
import { PrixComponent } from '@features/prestataire/components/prix/prix.component';
import { StatistiquesComponent } from '@features/prestataire/components/statistiques/statistiques.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'app-prix-statistiques',
  standalone: true,
  imports: [CommonModule,DynamicChildLoaderDirective, PricesStatisticsComponent, NavbarComponent],
  templateUrl: './prix-statistiques.component.html',
  styleUrls: ['./prix-statistiques.component.scss']
})
export class PrixStatistiquesComponent {


  active!: boolean;
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;
  Prix = PrixComponent
  Statistiques = StatistiquesComponent
  
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
    this.loadComponent(this.Prix)

  }

  historique() {
    this.active = false;
    // // console.log(this.active);
    this.loadComponent(this.Statistiques)
  }
}
