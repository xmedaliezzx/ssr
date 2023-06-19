import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date! : any
  constructor(private config: PrimeNGConfig, private translateService: TranslateService, private _router:Router) {}

  ngOnInit() {
      this.translateService.setDefaultLang('fr');
  }

  translate(lang: string) {
      this.translateService.use(lang);
      this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }
  calendar(){
    this._router.navigate(['/prestataireAppointments']);
  }
}

 

