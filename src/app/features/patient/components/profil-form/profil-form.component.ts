import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CLOSE, OPEN } from '@store/dialog/dialog.action';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profil-form',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.scss']
})
export class ProfilFormComponent {
  PasswordBTNLoading: boolean = false;
  _store = inject(Store<AppStateInterface>);
  constructor(private _route: Router) { }
  perso() {
    this._route.navigate(['/profile/personnal']);
  }
  password() {
    this._route.navigate(['/profile/password']);
  }
  phone() {
    this._route.navigate(['/profile/phone']);
  }
  email(){
    this._route.navigate(['/profile/email']);
  }
  manageAccount() {
    this._route.navigate(['/profile/manage-account']);
  }
  dele() {
    //this._route.navigate(['/profile/delete']);
  }
  rec() {
    this._route.navigate(['/profile/reclamation']);
  }
  OtherMember() {
    this._route.navigate(['/profile/reclamation']);
  }

  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
