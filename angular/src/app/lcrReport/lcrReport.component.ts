import { DialogChartComponent } from './../shared/dialogChart.component';
import { Component, ViewContainerRef, AfterViewInit, NgZone } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LcrReportService } from './lcrReport.service';
import { GridOptions, ColDef } from 'ag-grid';
import { CellGridComponent } from '../shared/cellGrid.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import * as zingchart from 'zingchart';
import * as numeral from 'numeral';

@Component({
  selector: 'app-lcr-report',
  templateUrl: './template.html',
  providers: [LcrReportService],
  animations: [
    trigger('hqla', [
      state('inactive', style({
        display: 'none'
      })),
      state('active', style({
        display: 'auto',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('asset', [
      state('inactive', style({
        display: 'none'
      })),
      state('active', style({
        display: 'auto',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('nco', [
      state('inactive', style({
        display: 'none'
      })),
      state('active', style({
        display: 'auto',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('inout', [
      state('inactive', style({
        display: 'none'
      })),
      state('active', style({
        display: 'auto',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LcrReportComponent implements AfterViewInit {

  private currentForm = 'LRCData'

  public chart1: { values: Array<any>, labels: Array<any> }
  public chart2: { values: Array<any>, labels: Array<any> }
  public chart3: { values: Array<any>, labels: Array<any> }
  public chart4: { values: Array<any>, labels: Array<any> }
  public chart5: { values: Array<any>, labels: Array<any> }
  public chart6: { values: { serie1: Array<any>, serie2: Array<any> }, labels: Array<any> }

  single: Array<any>;

  hqlaState = 'active';
  ncoState = 'active';
  assetState = 'inactive';
  inOutState = 'inactive';

  totalAssetBeforeCaps  = 0;
  HQLA = 0;
  strHQLA;
  NCO = 0;
  strNCO;
  LCR = 0;
  strLCR;

  modalState
  char6

  // view: any[];
  // width = 700;
  // height = 320;
  // fitContainer = true;

  // toggleFitContainer = (event) => {
  //   this.fitContainer = event
  //   if (this.fitContainer) {
  //     this.view = undefined;
  //   } else {
  //     this.applyDimensions();
  //   }
  // }

  // applyDimensions = () => {
  //   this.view = [this.width, this.height];
  // }

  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, private lcrReportService: LcrReportService, public toastr: ToastsManager, vcr: ViewContainerRef, private ngZone: NgZone) {
    this.toastr.setRootViewContainerRef(vcr);
    this.single = new Array<any>();
    window.onresize = (e) => {
      this.ngZone.run(() => {
      });
    };

  }

  openDialog(index): void {
    this.modalState = index
    const dialogRef = this.dialog.open(DialogChartComponent, {
      data: {
        id: 'myChart1',
        data: this.configChart(this.chart1, 'Level 1 assets'),
        height: '380'
       }
    });

    dialogRef.afterOpen().subscribe(result => {
      switch (this.modalState) {
        case 1:
          zingchart.render({
            id: 'chartDiv',
            data: this.configChart(this.chart1, 'Level 1 assets'),
            height: '400',
            width: '900'
          });
          break;
        case 2:
          zingchart.render({
            id: 'chartDiv',
            data: this.configChart(this.chart2, 'Level 2A assets'),
            height: '400',
            width: '900'
          });
          break;
        case 3:
          zingchart.render({
            id: 'chartDiv',
            data: this.configChart(this.chart3, 'Level 2B assets'),
            height: '400',
            width: '900'
          });
          break;
        case 4:
          zingchart.render({
            id: 'chartDiv',
            data: this.configChart(this.chart4, 'HQLA'),
            height: '400',
            width: '900'
          });
          break;
        case 5:
          zingchart.render({
            id: 'chartDiv',
            data: this.configChartNCO(this.chart5, 'NCO'),
            height: '400',
            width: '900'
          });
          break;
        case 6:
          zingchart.render({
            id: 'chartDiv',
            data: this.char6,
            height: '400',
            width: '900'
          });
          break;
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  togglehqlaState = () => {
    this.ncoState = 'inactive';
    this.assetState = 'active';
  }

  togglencoState = () => {
    this.hqlaState = 'inactive';
    this.inOutState = 'active';
  }

  back = () => {
    this.hqlaState = 'active';
    this.ncoState = 'active';
    this.assetState = 'inactive';
    this.inOutState = 'inactive';

  }

  load = () => {
  }

  configChart(dataChart: { values: Array<any>, labels: Array<any> }, name: string) {
    const configChart1 = {
      type: 'waterfall',
      'title': {
        'text': name,
        'height': '40px',
        'font-weight': 'bold',
        'text-color': '#ffffff',
        'font-family': 'Roboto, sans-serif',
        'font-size': '18px',
        'color': '#004d71'
      },
      'border-color': '#B9BABC',
      'border-radius': 3,
      'options': {
        'line': {
          'line-segment-size': 4,
          'line-gap-size': 3,
          'line-width': 1,
          'line-color': 'black',
        },
        'intermediate': {
          'background-color': '#009B0C'
        },
        'positive': {
          'background-color': '#009B0C'
        },
        'negative': {
          'background-color': '#C60000'
        },
        'final': {
          'background-color': '#F9A825'
        },
      },
      'series': [
        {
          'values': dataChart.values,
          'tooltip': {
            'background-color': '#232323',
            'text': '$%v',
            'font-size': '12px',
            'padding': '6 12',
            'border-color': 'none',
            'shadow': 0,
            'border-radius': 5,
            'decimals': 0,
            'thousands-separator': ','
          }
        }
      ],
      'plot': {
        'valueBox': {
          'backgroundColor': '#FFF',
          'decimals': 0,
          'text': '%v',
          'placement': 'top',
          'short': true,
        },
        'animation': {
          'delay': 100,
          'effect': 'ANIMATION_UNFOLD_VERTICAL',
          'method': 'ELASTIC_EASE_OUT',
          'sequence': 2,
          'speed': 700
        },
        'show-zero': true
      },
      'scale-x': {
        'labels': dataChart.labels,
        'font-color': 'rgb(0,0,0)',
        'line-color': 'rgb(200,200,200)',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'items-overlap': true,
        'max-items': dataChart.labels.length,
        'item': {
          'clip-text': true,
          'font-size': 10,
          'max-chars': 20,
          'wrap-text': true,
          'width': 100
        },
        'tooltip': {
          'text': '%v',
          'width': '120px',
          'wrap-text': true,
          'backgroundColor': '#323232',
          'borderColor': 'black',
          'borderRadius': 3,
          'borderWidth': 1,
          'fontColor': '#ffffff',
          'fontFamily': 'Roboto',
          'font-size': 12,
          'padding': '5px'
        }
      },
      'scale-y': {
        'format': '%v',
        'short': true,
        'line-color': 'rgb(200,200,200)',
        'tick': {
          'line-color': 'rgb(200,200,200)',
        },
        'guide': {
          'lineColor': '#DDDDDD',
          'items': [
            {
              'background-color': '#FFFFFF',
            },
            {
              'background-color': '#EEEEEE',
            },
          ],
        },
      },
    };
    return configChart1;
  }

  configChartNCO(dataChart: { values: Array<any>, labels: Array<any> }, name: string) {
    const configChart1 = {
      type: 'waterfall',
      'title': {
        'text': name,
        'height': '40px',
        'font-weight': 'bold',
        'text-color': '#ffffff',
        'font-family': 'Roboto, sans-serif',
        'font-size': '18px',
        'color': '#004d71'
      },
      'plotarea': {
        'margin': '95px 35px 50px 70px',
        'background-color': '#fff',
        'alpha': 0.3
      },
      'border-color': '#B9BABC',
      'border-radius': 3,
      'options': {
        'line': {
          'line-segment-size': 4,
          'line-gap-size': 3,
          'line-width': 1,
          'line-color': 'black',
        },
        'intermediate': {
          'background-color': '#009B0C'
        },
        'positive': {
          'background-color': '#009B0C'
        },
        'negative': {
          'background-color': '#C60000'
        },
        'final': {
          'background-color': '#F9A825'
        },
      },
      'series': [
        {
          'values': dataChart.values,
          'tooltip': {
            'background-color': '#232323',
            'text': '$%v',
            'font-size': '12px',
            'padding': '6 12',
            'border-color': 'none',
            'shadow': 0,
            'border-radius': 5,
            'decimals': 0,
            'thousands-separator': ','
          }
        }
      ],
      'plot': {
        'valueBox': {
          'backgroundColor': '#FFF',
          'decimals': 0,
          'text': '%v',
          'placement': 'top',
          'short': true,
        },
        'animation': {
          'delay': 100,
          'effect': 'ANIMATION_UNFOLD_VERTICAL',
          'method': 'ELASTIC_EASE_OUT',
          'sequence': 2,
          'speed': 700
        },
        'show-zero': true
      },
      'scale-x': {
        'labels': dataChart.labels,
        'font-color': 'rgb(0,0,0)',
        'line-color': 'rgb(200,200,200)',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'items-overlap': true,
        'max-items': dataChart.labels.length,
        'item': {
          'clip-text': true,
          'font-size': 10,
          'max-chars': 20,
          'wrap-text': true,
          'width': 100
        },
        'tooltip': {
          'text': '%v',
          'width': '120px',
          'wrap-text': true,
          'backgroundColor': '#323232',
          'borderColor': 'black',
          'borderRadius': 3,
          'borderWidth': 1,
          'fontColor': '#ffffff',
          'fontFamily': 'Roboto',
          'font-size': 12,
          'padding': '5px'
        }
      },
      'scale-y': {
        'values': '-4500000:500000:500000',
        'format': '%v',
        'short': true,
        'line-color': 'rgb(200,200,200)',
        'tick': {
          'line-color': 'rgb(200,200,200)',
        },
        'guide': {
          'lineColor': '#DDDDDD',
          'items': [
            {
              'background-color': '#FFFFFF',
            },
            {
              'background-color': '#EEEEEE',
            },
          ],
        },
      },
    };
    return configChart1;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.load();

    this.lcrReportService.getJson('Forms/' + this.currentForm + '.json').then((response) => {
      this.chart1 = { values: [], labels: [] };
      this.chart2 = { values: [], labels: [] };
      this.chart3 = { values: [], labels: [] };
      this.chart4 = { values: [], labels: [] };
      this.chart5 = { values: [], labels: [] };
      this.chart6 = {
        values: {
          serie1: [],
          serie2: []
        },
        labels: []
      };

      const asset1: Array<any> = response.data.asset1;

      let totalAssets1 = 0
      let totalAssets1Perc = 0
      asset1.forEach((value, index) => {
        this.chart1.values.push(value.value);
        this.chart1.labels.push(value.name);
        totalAssets1 += value.value;
        totalAssets1Perc += value.value * (value.Percentage / 100);
      });

      this.chart1.values.push('SUM');
      this.chart1.labels.push('A. Level 1 assets');

      const asset2: Array<any> = response.data.asset2.asset2A;

      let totalAssets2A = 0
      let totalAssets2APerc = 0
      let perc2A = 0
      let totalAssets2AHaircut = 0
      asset2.forEach((value, index) => {
        if (index === 0) {
          perc2A = value.Percentage
        }
        totalAssets2A += value.value;
        totalAssets2APerc += value.value * (value.Percentage / 100);
        this.chart2.values.push(value.value);
        this.chart2.labels.push(value.name);
      });

      totalAssets2AHaircut = totalAssets2A * (perc2A / 100);

      this.chart2.values.push('SUM');
      this.chart2.labels.push('Level 2A assets');

      this.chart2.values.push(totalAssets2AHaircut - totalAssets2A);
      this.chart2.labels.push('Haircut Level 2A');

      this.chart2.values.push('SUM');
      this.chart2.labels.push('Level 2A assets (incl. haircut)');

      const asset3: Array<any> = response.data.asset2.asset2B;

      let totalAssets2B = 0
      let totalAssets2BHaircut = 0
      asset3.forEach((value, index) => {
        totalAssets2B += value.value;
        totalAssets2BHaircut += value.value * (value.Percentage / 100);
        this.chart3.values.push(value.value);
        this.chart3.labels.push(value.name);
      });


      this.chart3.values.push('SUM');
      this.chart3.labels.push('Level 2B assets');

      this.chart3.values.push(totalAssets2BHaircut - totalAssets2B);
      this.chart3.labels.push('Haircut Level 2B');

      this.chart3.values.push('SUM');
      this.chart3.labels.push('Level 2B assets (incl. haircut)');

      this.chart4.values.push(totalAssets2BHaircut);
      this.chart4.labels.push('Level 2B assets (incl. haircut)');

      this.chart4.values.push(totalAssets2AHaircut);
      this.chart4.labels.push('Level 2A assets (incl. haircut)');

      this.chart4.values.push(totalAssets1);
      this.chart4.labels.push('A. Level 1 assets');

      this.chart4.values.push('SUM');
      this.chart4.labels.push('Total Asset before caps');

      // =MAX(G20-15/85*(G9+G15);G20-15/60*G9;0)
      // const max = Math.max(
      const max1 = totalAssets2BHaircut - 15 / 85 * (totalAssets1Perc + totalAssets2APerc);
      const max2 = totalAssets2BHaircut - 15 / 60 * totalAssets1Perc
      const max3 = Math.max(max1, max2, 0);

      this.chart4.values.push(max3 * -1);
      this.chart4.labels.push('adjustion (cap 15%)');

      // =MAX((G15+G20-G22)-2/3*G9;0)
      const max01 = totalAssets2BHaircut - max3
      const max11 = (totalAssets2APerc + totalAssets2BHaircut - max01) - 2 / 3 * totalAssets1Perc;
      const max31 = Math.max(max11, 0);

      this.chart4.values.push(max31 * -1);
      this.chart4.labels.push('adjustion (cap 40%)');

      this.totalAssetBeforeCaps = (totalAssets2BHaircut + totalAssets2AHaircut + totalAssets1);
      this.HQLA = this.totalAssetBeforeCaps + (max3 * -1) + (max31 * -1);
      this.strHQLA = numeral(this.HQLA).format('0,0');

      // =MIN(G9*2/3;G15)
      const min1 = Math.min(totalAssets1Perc * 2 / 3, totalAssets2APerc);

      // G22 = max01
      // C38 totalAssets2AHaircut
      // max31 * -1

      // adjustion (cap Level 2)
      const adCaplvl2 = min1 - max01 - totalAssets2AHaircut - (max31 * -1)

      this.chart4.values.push(adCaplvl2);
      this.chart4.labels.push('adjustion (cap Level 2)');

      // High Quality Liquid Assets
      this.chart4.values.push('SUM');
      this.chart4.labels.push('High Quality Liquid Assets');


      // NCO
      const Inflow: Array<{ value: number, date: Date }> = response.data2.Inflow;
      const Outflow: Array<{ value: number, date: Date }> = response.data2.Outflow;
      let TotalInflow = 0;
      let TotalOutflow = 0;

      Inflow.forEach((value, index) => {
        this.chart6.values.serie1.push(value.value);
        this.chart6.labels.push(value.date);
        TotalInflow += value.value;
      });

      Outflow.forEach((value, index) => {
        this.chart6.values.serie2.push(value.value);
        TotalOutflow += value.value;
      });




      // NCO (incl. cap) -> =X66+X61
      // X66 -> =MIN(X62;-X65) | X61 -> XBR59
      // X62 -> =BR58 | X65 -> =X61*0,75
      const NCOinclCap = Math.min(TotalInflow, ((TotalOutflow * 0.75) * -1)) + TotalOutflow;
      this.NCO = NCOinclCap * -1;
      this.strNCO = numeral(this.NCO).format('0,0');
      this.chart5.values.push(NCOinclCap);
      this.chart5.labels.push('NCO (incl. cap)');

      // Inflow loss -> =X62+X65
      const InflowLoss = TotalInflow + (TotalOutflow * 0.75);
      this.chart5.values.push(InflowLoss);
      this.chart5.labels.push('Inflow loss');

      // Cash in/out -> =X62+X61
      const CashInOut = TotalInflow + TotalOutflow
      this.chart5.values.push(InflowLoss);
      this.chart5.labels.push('Cash in/out');

      // Outflows -> TotalOutflow
      this.chart5.values.push(TotalOutflow);
      this.chart5.labels.push('Outflows');

      // Inflows -> TotalInflow
      this.chart5.values.push(TotalInflow);
      this.chart5.labels.push('Inflows');

      // Outflows75%
      // inflow (after adj.)

      // Inflows
      // Outflows
      // CO
      // cap inflow
      // NCO (incl. cap)

      // =SI(X69-MIN(0,75*X69;X68)=0;"";X69-MIN(0,75*X69;X68))
      this.LCR = this.HQLA / (TotalOutflow - Math.min(0.75 * TotalOutflow, TotalInflow)) * -1;
      this.strLCR = numeral(this.LCR).format('0%');


      const myConfig = {
        'type': 'hbar',
        'background-color': '#fff',
        'title': {
          'text': 'In- & Outflows',
          'height': '40px',
          'font-weight': 'bold',
          'text-color': '#ffffff',
          'font-family': 'Roboto, sans-serif',
          'font-size': '18px',
          'color': '#004d71'
        },
        'legend': {
          'layout': 'float',
          'background-color': 'none',
          'border-color': 'none',
          'item': {
            'font-color': '#333'
          },
          'x': '37%',
          'y': '10%',
          'width': '90%',
          'shadow': 0
        },
        'plot': {
          'animation': {
            'effect': '11',
            'method': '3',
            'sequence': 'ANIMATION_BY_PLOT_AND_NODE',
            'speed': 10
          }
        },
        'plotarea': {
          'margin': '95px 35px 50px 70px',
          'background-color': '#fff',
          'alpha': 0.3
        },
        'scale-y': {
          'background-color': '#fff',
          'border-width': '1px',
          'border-color': '#333',
          'alpha': 0.5,
          'format': '$%v',
          'thousands-separator': ',',
          'guide': {
            'line-style': 'solid',
            'line-color': '#333',
            'alpha': 0.2
          },
          'tick': {
            'line-color': '#333',
            'alpha': 0.2
          },
          'item': {
            'font-color': '#333',
            'padding-right': '6px'
          },
          'tooltip': {
            'text': '%v',
            'width': '120px',
            'wrap-text': true,
            'backgroundColor': '#323232',
            'borderColor': 'black',
            'borderRadius': 3,
            'borderWidth': 1,
            'fontColor': '#ffffff',
            'fontFamily': 'Roboto',
            'font-size': 12,
            'padding': '5px'
          }
        },
        'scale-x': {
          'background-color': '#fff',
          'border-width': '1px',
          'border-color': '#333',
          'alpha': 0.5,
          'values': this.chart6.labels,
          'guide': {
            'visible': false
          },
          'tick': {
            'line-color': '#333',
            'alpha': 0.2
          },
          'item': {
            'font-size': '11px',
            'font-color': '#333'
          }
        },
        'series': [
          {
            'values': this.chart6.values.serie2,
            'text': 'Outflow',
            'background-color': '#C60000',
            'border-color': '#C60000',
            'legend-marker': {
              'border-color': '#C60000'
            },
            'tooltip': {
              'background-color': '#232323',
              'text': '$%v',
              'font-size': '12px',
              'padding': '6 12',
              'border-color': 'none',
              'shadow': 0,
              'border-radius': 5,
              'decimals': 0,
              'thousands-separator': ','
            }
          },
          {
            'values': this.chart6.values.serie1,
            'text': 'Inflow',
            'background-color': '#009B0C',
            'border-color': '#009B0C',
            'legend-marker': {
              'border-color': '#009B0C'
            },
            'tooltip': {
              'background-color': '#232323',
              'text': '$%v',
              'font-size': '12px',
              'padding': '6 12',
              'border-color': 'none',
              'shadow': 0,
              'border-radius': 5,
              'decimals': 0,
              'thousands-separator': ','
            }
          }
        ]
      };

      this.char6 = myConfig;



      zingchart.render({
        id: 'myChart1',
        data: this.configChart(this.chart1, 'Level 1 assets'),
        height: '380'
      });

      zingchart.render({
        id: 'myChart2',
        data: this.configChart(this.chart2, 'Level 2A assets'),
        height: '380'
      });

      zingchart.render({
        id: 'myChart3',
        data: this.configChart(this.chart3, 'Level 2B assets'),
        height: '380'
      });

      zingchart.render({
        id: 'myChart4',
        data: this.configChart(this.chart4, 'HQLA'),
        height: '380'
      });

      zingchart.render({
        id: 'myChart5',
        data: this.configChartNCO(this.chart5, 'NCO'),
        height: '380'
      });

      zingchart.render({
        id: 'myChart6',
        data: myConfig,
        height: '350'
      });


    });


  }

  ngAfterViewInit(): void {
  }


}
