import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { NONE_TYPE } from '@angular/compiler';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule,ChartModule,ButtonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  data: any;
  data2: any;
  jour:boolean =true

  options: any;
  constructor( private _router:Router) {}

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
              // {
              //     label: 'My First dataset',
              //     backgroundColor: documentStyle.getPropertyValue('#B3B3B3'),
              //     borderColor: documentStyle.getPropertyValue('#B3B3B3'),
              //    // data: [65, 59, 80, 81, 56, 55, 40]
              // },
              {
                data: [28, 48, 40, 19, 86, 27, 190],
                  label: false,
                 // fill: false,
                    borderDash: [5, 5],
                  backgroundColor: documentStyle.getPropertyValue('--grey'),
                //  borderColor: documentStyle.getPropertyValue('#B3B3B3'),
                  
              }
          ]
      };

      this.options = {
          // maintainAspectRatio: false,
          // aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: false
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
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
                  grid: {
                      color: surfaceBorder,
                      fill: false,
                    borderDash: [5, 5],
                      drawBorder: false
                  }
              }

          }
      };




      this.data2 = {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [
            // {
            //     label: 'My First dataset',
            //     backgroundColor: documentStyle.getPropertyValue('#B3B3B3'),
            //     borderColor: documentStyle.getPropertyValue('#B3B3B3'),
            //    // data: [65, 59, 80, 81, 56, 55, 40]
            // },
            {
              data: [40, 48, 40, 16, 86, 140, 19],
                label:'',
               // fill: false,
                  borderDash: [5, 5],
                backgroundColor: documentStyle.getPropertyValue('--red'),
              //  borderColor: documentStyle.getPropertyValue('#B3B3B3'),
                
            }
        ]
    };


   


  }
  day(){
      this.jour=false;  
  }

  month(){
    this.jour=true;   
  }

  statistic(){
    this._router.navigate(['/pricesStatistics']);
  }

}