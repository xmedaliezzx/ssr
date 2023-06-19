import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-choice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-choice.component.html',
  styleUrls: ['./auth-choice.component.scss']
})
export class AuthChoiceComponent {
constructor(private _route: Router){}
  Patient(){
    this._route.navigate(['/auth/signup/patient'])
  }

  Prestataire(){
    this._route.navigate(['/auth/signup/prestataire'])
  }

}
