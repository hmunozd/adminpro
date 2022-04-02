import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title: string="";
  @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data = [350, 450, 100];
  @Input() colors: Color[] = ['#9E120E', '#FF5800', '#FFB414']
  // Doughnut
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { data: this.data },
      ],
    };
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
