import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { RadioButtonModule } from 'primeng/radiobutton';
import { timeInterval } from 'rxjs';
import { MissionEnCoursComponent } from '../mission-en-cours/mission-en-cours.component';
@Component({
  selector: 'app-appels',
  standalone: true,
  imports: [CommonModule,CheckboxModule,LottieModule, RadioButtonModule, FormsModule, MissionEnCoursComponent ],
  templateUrl: './appels.component.html',
  styleUrls: ['./appels.component.scss']
})
export class AppelsComponent {
  @Input() checked: boolean;

  finish: boolean;
  block:boolean =true;

  fini(message: boolean) {
    this.finish = message;
  }
  Accepter: boolean =false;
  Reffuser: boolean =false;
  loading: boolean =false;
  oops: boolean = false;
  image: boolean = false;
  mission: boolean = false;
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
   setTimeout(() => {
    this.image =true;
   }, 3000);
   this.mission =true;
    
   
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
