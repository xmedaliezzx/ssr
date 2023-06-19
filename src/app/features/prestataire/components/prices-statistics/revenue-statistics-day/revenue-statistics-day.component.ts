import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-revenue-statistics-day',
  standalone: true,
  imports: [CommonModule,ChartModule ],
  templateUrl: './revenue-statistics-day.component.html',
  styleUrls: ['./revenue-statistics-day.component.scss']
})  
export class RevenueStatisticsDayComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
            
              {
                  label: 'Statistiques de revenus par jour pour :',
                 backgroundColor: documentStyle.getPropertyValue('--grey'),
                
                  data: [28, 48, 40, 19, 86, 27, 0],
                  tension: 0.2,
                  fill: false,
              }
          ]
      };

      this.options = {
        responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: false
              }
          },
        
          scales: {
              x: {
                //   ticks: {
                //       // color: textColorSecondary,
                //       font: {
                //           weight: 200
                //       }
                      
                //   },
                
                  grid: {
                    color: surfaceBorder,
                    display: false,
                    drawBorder: false
                  },
                  ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
              },
            
              y: {
              
                ticks: {
                    color: textColorSecondary,
                    display: false
              
                },
                grid: {
                    color: surfaceBorder,
                    fill: false,
                    borderDash: [10, 5],
                    borderColor: 'rgba(0,0,0,0)',
                    drawBorder: false
                }
            }
          }
      };
  }
}
