import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-statistics-week',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './statistics-week.component.html',
  styleUrls: ['./statistics-week.component.scss']
})
export class StatisticsWeekComponent {
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    // const labelsPosition = documentStyle.getPropertyValue('');

    this.data = {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: [
            documentStyle.getPropertyValue('--green'),
            documentStyle.getPropertyValue('--blue-2'),
          ],
          // hoverBackgroundColor: [documentStyle.getPropertyValue('--green'), documentStyle.getPropertyValue('--green'), documentStyle.getPropertyValue('--green-400')]
        },
      ],
      // labels: ['Rendez-vous 50%', 'Appels immédiats 50%'],
      labels: false
    };

    this.options = {
      cutout: '75%',
      plugins: {
        legend: {
          labels: {
            color: textColor,  
       
          },
        },
      },
    };
  }
}
