import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-work-area-details',
  templateUrl: './work-area-details.component.html',
  styleUrls: ['./work-area-details.component.scss']
})
export class WorkAreaDetailsComponent implements OnInit  {
  @ViewChild('halfDonutChart', { static: false }) canvasRef: ElementRef;
  constructor( private location: Location) {
    Chart.register(...registerables);
  }
 
  
  ngOnInit(){
    /* var ctx = document.getElementById('myChart') as HTMLCanvasElement; */
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'CO',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2
        }, {
          label: 'NO2',
          data: [8, 15, 10, 7, 11, 13], // Add CO data here
          borderWidth: 2
        }, {
          label: 'SO2',
          data: [5, 9, 12, 8, 6, 14], // Add NO2 data here
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Week of 12th December 2022',
            font: {
              size: function(context) { // Use a function to set dynamic font size
                var width = context.chart.width; // Get the chart width
                return width < 600 ? 14 : 18; // Set different font size for different chart widths
              },
              weight: 'bold'
            },
            align: 'center', // Set the alignment of the title to center
            padding: {
              top: 10 // Add top padding to the title for better alignment
            }
          }
        }
      }
    });

//doughnut chart
    var mydoughnutChart = new Chart("mydoughnutChart", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue'],
        datasets: [{
          label: 'CO',
          data: [12, 19],
          backgroundColor:[
            'rgb(168, 90, 166)',
            'rgb(213, 177, 250)'
          ],
          borderColor:[
            'rgb(182 168 195)',
            'rgb(182 168 195)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        circumference: 180,
        rotation: 270,
        cutout: '70%',
        aspectRatio: 2,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            filter: (tooltipItem) => {
              return tooltipItem.dataIndex === 0;
            }
          },
          title: {
            display: false,
            padding: {
              top: 10 // Add top padding to the title for better alignment
            }
          },
        }
      }
    });
}

  goBack(): void {
    // Use the location service to navigate back to the previous location
    this.location.back();
  }

}
