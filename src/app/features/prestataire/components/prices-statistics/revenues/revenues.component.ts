import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsMonthComponent } from '../statistics-month/statistics-month.component';

@Component({
  selector: 'app-revenues',
  standalone: true,
  imports: [CommonModule,StatisticsMonthComponent],
  templateUrl: './revenues.component.html',
  styleUrls: ['./revenues.component.scss']
})
export class RevenuesComponent {

}
