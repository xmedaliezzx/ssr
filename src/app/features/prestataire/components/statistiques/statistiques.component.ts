import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenuesComponent } from '../prices-statistics/revenues/revenues.component';
import { StatisticsWeekComponent } from '../prices-statistics/statistics-week/statistics-week.component';
import { StatisticsMonthComponent } from '../prices-statistics/statistics-month/statistics-month.component';
import { RevenueStatisticsDayComponent } from '../prices-statistics/revenue-statistics-day/revenue-statistics-day.component';
import { RevenueStatisticsMonthComponent } from '../prices-statistics/revenue-statistics-month/revenue-statistics-month.component';
import { InterJourComponent } from '../prices-statistics/inter-jour/inter-jour.component';
import { InterNuitComponent } from '../prices-statistics/inter-nuit/inter-nuit.component';
import { InterTotalComponent } from '../prices-statistics/inter-total/inter-total.component';

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [CommonModule,RevenuesComponent,StatisticsWeekComponent,StatisticsMonthComponent,InterJourComponent,InterNuitComponent, InterTotalComponent, RevenueStatisticsDayComponent, RevenueStatisticsMonthComponent],
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent {

}
