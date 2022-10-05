import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PerfectScrollbarDirective, PerfectScrollbarComponent, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [40, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';




  public breadcrumb: any;


  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Cadastro de Equipe',
      'links': [
        {
          'name': 'Inicio',
          'isLink': true,
          'link': '/changelog'
        },
        {
          'name': 'Cadastros',
          'isLink': true,
          'link': '#'
        }

      ]
    };
  }


}
