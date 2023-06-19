import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent {
  cities: string[] = [
    'Ariana',
    'Tataouine',
    'Gabés',
    'Monastir',
    'Le Kef',
    'Kasserine',
    'Béja',
    'Tozeur',
    'Gafsa',
    'Nabeul',
    'Mahdia',
    'Kébili',
    'Ben Arous',
    'Tunis',
    'Jendouba',
    'Sfax',
    'La Manouba',
    'Siliana',
    'Bizerte',
    'Zaghouan',
    'Kairouan',
    'Sidi Bouzid',
    'Médenine',
    'Sousse',
  ];
}
