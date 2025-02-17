import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', "../../../../assets/css/style.css"]
})
export class DashboardComponent implements OnInit {
  datas: any;
  data: any;

  optionss: any;
  options: any;

  ngOnInit() {
      const documentStyle1 = getComputedStyle(document.documentElement);
      const textColor1 = documentStyle1.getPropertyValue('--text-color');

      this.datas = {
          labels: ['A', 'B', 'C', 'D'],
          datasets: [
              {
                  data: [300, 50, 100, 200],
                  backgroundColor: [documentStyle1.getPropertyValue('--blue-500'), documentStyle1.getPropertyValue('--yellow-500'), documentStyle1.getPropertyValue('--green-500'), documentStyle1.getPropertyValue('--red-500')],
                  hoverBackgroundColor: [documentStyle1.getPropertyValue('--blue-400'), documentStyle1.getPropertyValue('--yellow-400'), documentStyle1.getPropertyValue('--green-400'), documentStyle1.getPropertyValue('--red-400')]
              }
          ]
      };


      this.optionss = {
          cutout: '60%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor1
                  }
              }
          }
      };
      
      ////////////////////////////////////////////////////////////////DEUXIEME DIAGRAMME////////////////////////////////////////////////////////////////////////////////////////////////
      
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                },
                {
                    type: 'bar',
                    label: 'Dataset 4',
                    backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
                
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
  }
}
