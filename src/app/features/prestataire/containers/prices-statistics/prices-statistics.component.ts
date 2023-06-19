import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrixComponent } from '@features/prestataire/components/prices-statistics/prix/prix.component';
import { StatisticsRevenuesComponent } from '@features/prestataire/components/prices-statistics/statistics-revenues/statistics-revenues.component';
import { RevenuesComponent } from '@features/prestataire/components/prices-statistics/revenues/revenues.component';
import { GeneralStatisticsComponent } from '@features/prestataire/components/prices-statistics/general-statistics/general-statistics.component';
import { StatisticsWeekComponent } from '@features/prestataire/components/prices-statistics/statistics-week/statistics-week.component';
import { StatisticsMonthComponent } from '@features/prestataire/components/prices-statistics/statistics-month/statistics-month.component';
import { RevenueStatisticsMonthComponent } from '@features/prestataire/components/prices-statistics/revenue-statistics-month/revenue-statistics-month.component';
import { RevenueStatisticsDayComponent } from '@features/prestataire/components/prices-statistics/revenue-statistics-day/revenue-statistics-day.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';


@Component({
  selector: 'app-prices-statistics',
  standalone: true,
  imports: [CommonModule,PrixComponent,NavbarComponent,RevenueStatisticsMonthComponent,RevenueStatisticsDayComponent,StatisticsRevenuesComponent,StatisticsMonthComponent,RevenuesComponent,GeneralStatisticsComponent,StatisticsWeekComponent],
  templateUrl: './prices-statistics.component.html',
  styleUrls: ['./prices-statistics.component.scss']
})
export class PricesStatisticsComponent {

}
