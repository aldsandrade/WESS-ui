import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public lineChartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50, 31, 86, 35, 50], label: '2019'},
    {data: [48, 38, 65, 39, 66, 17, 80, 39, 66, 17, 80], label: '2020'},
    {data: [20, 5, 60, 10, 30, 56, 30, 10, 30, 56, 30], label: '2021'},
    {data: [15, 10, 70, 20, 35, 45, 77, 20, 35, 45, 77], label: '2022'}
  ];

  ngOnInit(): void {
  }

}
