import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-search-service',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    TranslateModule,
    LottieModule
  ],
  templateUrl: './home-search-service.component.html',
  styleUrls: ['./home-search-service.component.scss'],
})
export class HomeSearchServiceComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/arrow.json',
  };
  services: string[] = ['Médecin généraliste', 'Infirmier(e)', 'Aide soignant(e)'];
  selectedService: string = 'Médecin généraliste';
}
