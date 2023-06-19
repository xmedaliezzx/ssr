import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reclamation-form',
  standalone: true,
  imports: [CommonModule,RouterModule,AccordionModule,ButtonModule],
  templateUrl: './reclamation-form.component.html',
  styleUrls: ['./reclamation-form.component.scss']
})
export class ReclamationFormComponent {
  constructor(private _route: Router) { }
  retour() {
    this._route.navigate(['/profile/Profil']);
  }
}
