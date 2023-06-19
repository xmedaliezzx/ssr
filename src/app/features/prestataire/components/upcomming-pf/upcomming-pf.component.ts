import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcomming-pf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcomming-pf.component.html',
  styleUrls: ['./upcomming-pf.component.scss']
})
export class UpcommingPFComponent {
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
}
