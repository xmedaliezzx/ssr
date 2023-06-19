import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appels-pf',
  standalone: true,
  imports: [CommonModule,CheckboxModule,LottieModule, RadioButtonModule, FormsModule ],
  templateUrl: './appels-pf.component.html',
  styleUrls: ['./appels-pf.component.scss']
})
export class AppelsPFComponent {
  @Input() checked: boolean;
  Accepter: boolean =false;
  Reffuser: boolean =false;
  loading: boolean =false;
  oops: boolean = false;
  image: boolean = false;
  options1: AnimationOptions = {
    path: '/assets/lottie/loading_6.json',
  };
  options2: AnimationOptions = {
    path: '/assets/lottie/eclats_ronds.json',
  };
  options3: AnimationOptions = {
    path: '/assets/lottie/Comp.json',
  };
  
  free : string = 'notfree';
  options: AnimationOptions = {
    path: '/assets/lottie/Timer.json',
  };


  object1 = {
    a: 'somestring',
    b: 42
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
    this.free = 'not free';
}

Accept(){
  this.Accepter=true
  console.log('Accepter',this.Accepter);
  setTimeout(() => {
   this.loading =true;
  }, 1000);
  setTimeout(() => {
    this.oops =true;
   }, 2000);
  
    this.image =true;
   
}

Refuse(){
  this.Reffuser=true
  setTimeout(() => {
    this.loading =true;
   }, 1000);
   setTimeout(() => {
    this.oops =true;
   }, 2000);
  
    this.image =true;
   
}
}
