import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsMonthComponent } from '../statistics-month/statistics-month.component';
import { StatisticsWeekComponent } from '../statistics-week/statistics-week.component';
import { RevenuesComponent } from '../revenues/revenues.component';

@Component({
  selector: 'app-statistics-revenues',
  standalone: true,
  imports: [CommonModule,StatisticsMonthComponent,StatisticsWeekComponent,RevenuesComponent],
  templateUrl: './statistics-revenues.component.html',
  styleUrls: ['./statistics-revenues.component.scss']
})
export class StatisticsRevenuesComponent {

}
