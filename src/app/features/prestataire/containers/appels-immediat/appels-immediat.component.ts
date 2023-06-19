import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicChildLoaderDirective } from '@shared/directives/dynamic-child-loader.directive';
import { ImmediatsComponent } from '@features/prestataire/components/immediats/immediats.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { HistoriqueAppelsImmediatComponent } from '@features/patient/components/historique-appels-immediat/historique-appels-immediat.component';

@Component({
  selector: 'app-appels-immediat',
  standalone: true,
  imports: [CommonModule,DynamicChildLoaderDirective,NavbarComponent],
  templateUrl: './appels-immediat.component.html',
  styleUrls: ['./appels-immediat.component.scss']
})
export class AppelsImmediatComponent {
  active!: boolean;
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;
  Immediats = ImmediatsComponent
  Historique = HistoriqueAppelsImmediatComponent
  
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
    this.loadComponent(this.Immediats)

  }

  historique() {
    this.active = false;
    // // console.log(this.active);
    this.loadComponent(this.Historique)
  }
}
