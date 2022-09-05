import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit {

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  
  
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor:null,
        borderWidth:0,
        margin:[2, 2, 2, 2],
        height:60
      },
      title: {
        text: null
      },
      subtitle: {
        text:null
       
      },
      tooltip: {
        split:true,
        outside:true,
      },
      legend:{
        enable: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis:{
        labels:{
          enabled:false 
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      plotOptions: {
        series: {
          pointStart: 2013
        },
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          },
        },
      },
      yAxis:{
        labels:{
          enabled:false 
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      series: [{
        data:[71, 78, 39, 68]
      }]
    };

     HC_exporting(Highcharts);

     setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    
  }

}
