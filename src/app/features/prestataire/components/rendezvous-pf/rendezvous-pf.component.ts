import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rendezvous-pf',
  standalone: true,
  imports: [CommonModule,CheckboxModule,RadioButtonModule,FormsModule, LottieModule],
  templateUrl: './rendezvous-pf.component.html',
  styleUrls: ['./rendezvous-pf.component.scss']
})
export class RendezvousPFComponent {
  free1 : string = 'notfree';
  free2 : string = 'notfree';
  options: AnimationOptions = {
    path: '/assets/lottie/Timer.json',
  };
  objects ={
    object1 : {
    'Annonce à la municipalité ' : 'oui',
    'Médecin pour déclaration du décès' : 'oui',
    'Nombre de décédés ' : ' 7',
    'laveur ' : 'homme et femme',
    'Transport depuis et vers l`aéroport' : 'oui',
    'Date de transport au cimetière' : '12/03/2023',
    'Localisation cimetière' : 'jalez',
    'Nombre du fark ' : '2',
    'Traiteur' : 'oui',
    'Emplacement' : 'Appartement num 2 Immeuble kadha kadh, rue arafet Sousse',
  
  },
  object2 : {
    'Annonce à la municipalité ' : 'oui',
    'Médecin pour déclaration du décès' : 'oui',
    'Nombre de décédés ' : ' 78',
    'laveur ' : 'homme et femme',
    'Transport depuis et vers l`aéroport' : 'oui',
    'Date de transport au cimetière' : '12/03/2023',
    'Localisation cimetière' : 'jalez',
    'Nombre du fark ' : '2',
    'Traiteur' : 'oui',
    'Emplacement' : 'Appartement num 2 Immeuble kadha kadh, rue arafet Sousse',
  
  }}
  
  
  objectEntries(obj: any): [string, any][] {
    
    return Object.entries(obj);
  }
  ngOnInit() {
    this.free1 = 'not free';
    this.free2 = 'not free';
}


}
