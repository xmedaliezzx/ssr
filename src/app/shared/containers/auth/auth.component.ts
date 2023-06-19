import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { GetTypePrestataire } from '@store/user/user.selector';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,NavbarComponent,   RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  _store = inject(Store<AppStateInterface>);
  typePrestataire: string ='paramedical'
  constructor() {
    this._store
    .select(GetTypePrestataire).subscribe((typePrestataire) => {
      this.typePrestataire = typePrestataire;
 console.log('typePrestataire :',this.typePrestataire);
 
    });
 


  }
}
