import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-calendar-prestataire',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule],
  templateUrl: './calendar-prestataire.component.html',
  styleUrls: ['./calendar-prestataire.component.scss']
})
export class CalendarPrestataireComponent implements OnInit {
  date! : any
  constructor(private config: PrimeNGConfig, private translateService: TranslateService) {}

  ngOnInit() {
      this.translateService.setDefaultLang('fr');
  }

  translate(lang: string) {
      this.translateService.use(lang);
      this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }
}

 

