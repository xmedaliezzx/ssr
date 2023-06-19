import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-revenue-statistics-month',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './revenue-statistics-month.component.html',
  styleUrls: ['./revenue-statistics-month.component.scss']
})
export class RevenueStatisticsMonthComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['Jun', 'Fev', 'Mar', 'Avr', 'Mai', 'Ju', 'Jul','Aou'],
          datasets: [
            
              {
                  label: 'Statistiques de revenus par moins pour :',
                  
              backgroundColor: documentStyle.getPropertyValue('--grey'),
                
                  data: [28, 48, 40, 19, 86, 27, 90,3],
                  tension: 0.4
              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {    labels: false
              }
          },
        
          scales: {
            x: {
                ticks: {
                    // color: textColorSecondary,
                    font: {
                        weight: 200
                    }
                },
                grid: {
                  color: surfaceBorder,
                  display: false,
                  drawBorder: false
                }
            },
          
            y: {
              ticks: {
                  color: textColorSecondary,
                  display: false
              },
          
          }
        }
      };
  }
}
