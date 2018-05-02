import { Response } from '@angular/http';
import { Component, ViewContainerRef, AfterViewInit, NgZone } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LrmReportService } from './lrmReport.service';
import { NIIDecomposition, Column, Type_Column, CashFlow, HannaData, Row } from '../shared/NIIDecomposition';
import { GridOptions, ColDef } from 'ag-grid';
import { CellClickGrid1Component } from './cellClickGrid1.component';
import { CellClickGrid2Component } from './cellClickGrid2.component';
import { CellClickGrid3Component } from './cellClickGrid3.component';
import { CellGridComponent } from '../shared/cellGrid.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import * as zingchart from 'zingchart';
import * as async from 'async';

@Component({
  selector: 'app-lrm-report',
  templateUrl: './template.html',
  providers: [LrmReportService]
})
export class LrmReportComponent implements AfterViewInit {

  public grid1: GridOptions;
  public grid1Temp;
  public totalColumn1Grid1 = 0;
  public totalColumn2Grid1 = 0;

  public grid2: GridOptions;
  public grid2Temp;
  public totalColumn1Grid2 = 0;
  public totalColumn2Grid2 = 0;

  public grid3: GridOptions;
  public grid3Temp;
  public totalColumn1Grid3 = 0;
  public totalColumn2Grid3 = 0;

  public NIID: NIIDecomposition = new NIIDecomposition();

  private currentForm = 'LRMData'
  public hannaData: HannaData = new HannaData();

  chart1
  dataChart1Temp
  chart2
  dataChart2Temp
  single: Array<any>;
  multi: Array<any>;

  view: any[];
  width = 700;
  height = 320;
  fitContainer = true;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  roundDomains = true;

  colorScheme = {
    domain: ['green', 'red', 'orange']
  };

  date = new Date('2017-01-01T06:00:10.000Z');
  selectedValue = { value: 'REAL', viewValue: 'REAL' };

  TYPE = [
    { value: 'REAL', viewValue: 'ACTUAL' },
    { value: 'PLANNED', viewValue: 'SIMULATE' }
  ];

  toggleFitContainer = (event) => {
    this.fitContainer = event
    if (this.fitContainer) {
      this.view = undefined;
    } else {
      this.applyDimensions();
    }
  }

  applyDimensions = () => {
    this.view = [this.width, this.height];
  }


  constructor(private lrmReportService: LrmReportService, public toastr: ToastsManager, vcr: ViewContainerRef, private ngZone: NgZone) {
    this.toastr.setRootViewContainerRef(vcr);
    this.single = new Array<any>();
    this.grid1 = <GridOptions>{
      enableSorting: true,
      context: {
        componentParent: this
      },
      animateRows: true,
      enableColResize: true,
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
      },
      onGridSizeChanged: function (params) {
        params.api.sizeColumnsToFit();
      },
      pinnedBottomRowData: [],
      columnDefs: [],
      rowData: []
    };

    this.grid2 = <GridOptions>{
      enableSorting: true,
      context: {
        componentParent: this
      },
      animateRows: true,
      enableColResize: true,
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
      },
      onGridSizeChanged: function (params) {
        params.api.sizeColumnsToFit();
      },
      pinnedBottomRowData: [],
      columnDefs: [],
      rowData: []
    };

    this.grid3 = <GridOptions>{
      enableSorting: true,
      context: {
        componentParent: this
      },
      animateRows: true,
      enableColResize: true,
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
      },
      onGridSizeChanged: function (params) {
        params.api.sizeColumnsToFit();
      }
    };
    this.grid3.columnDefs = [
      {
        headerName: 'Key Figure',
        field: 'name',
        cellRendererFramework: CellClickGrid3Component,
      },
      {
        headerName: 'Value',
        field: 'value',
        cellStyle: function (params) {
          return { 'text-align': 'right' };
        }, headerClass: 'text-right',
        type: 'numericColumn',
        cellRendererFramework: CellClickGrid3Component,
      }

    ];
  }

  createDecomposition = (data: Array<any>): any => {
    this.NIID.clear();
    data.filter((value, index) => {
      return value.balance_side === 'Assets'
    }).forEach((value, index) => {
      this.NIID.interest_income += parseFloat(value.costs);
      this.NIID.marginal_contribution_assets_interest += parseFloat(value.marg_cont_int);
      this.NIID.marginal_contribution_assets_liquidity += parseFloat(value.marg_cont_liq) * -1;
    })

    data.filter((value, index) => {
      return value.balance_side === 'Liabilities & Equity'
    }).forEach((value, index) => {
      this.NIID.interest_cost += parseFloat(value.costs) * -1;
      this.NIID.marginal_contribution_interest += parseFloat(value.marg_cont_int);
      this.NIID.marginal_contribution_liquidity += parseFloat(value.marg_cont_liq);
    })

    this.NIID.Net_interest_rate_income = this.NIID.interest_income + this.NIID.interest_cost;
    this.NIID.total_marginal_contribution_Assets =
      this.NIID.marginal_contribution_assets_interest +
      this.NIID.marginal_contribution_assets_liquidity;
    this.NIID.total_marginal_contribution_el = this.NIID.marginal_contribution_interest + this.NIID.marginal_contribution_liquidity;
    this.NIID.total_marginal_contribution = this.NIID.total_marginal_contribution_Assets + this.NIID.total_marginal_contribution_el;

    this.NIID.Structural_Contribution = this.NIID.Net_interest_rate_income - this.NIID.total_marginal_contribution;
    this.NIID.Structural_Contribution_Liquidity =
      (this.NIID.marginal_contribution_assets_liquidity + this.NIID.marginal_contribution_liquidity) *
      -1;
    this.NIID.Structural_Contribution_interest = this.NIID.Structural_Contribution - this.NIID.Structural_Contribution_Liquidity;

    this.dataChart1Temp = {
      values: [
        this.NIID.marginal_contribution_assets_interest,
        this.NIID.marginal_contribution_assets_liquidity,
        this.NIID.marginal_contribution_interest,
        this.NIID.marginal_contribution_liquidity,
        this.NIID.Structural_Contribution_interest,
        this.NIID.Structural_Contribution_Liquidity,
        'SUM'
      ],
      labels: [
        'marginal<br>contribution<br>assets interest',
        'marginal<br>contribution<br>assets liquidity',
        'marginal<br>contribution<br>interest',
        'marginal<br>contribution<br>liquidity',
        'Structural<br>Contribution<br>interest',
        'Structural<br>Contribution<br>Liquidity',
        'Total'
      ]
    }

    this.dataChart2Temp = {
      values: [
        this.NIID.interest_income,
        this.NIID.interest_cost,
        'SUM'
      ],
      labels: [
        'interest income',
        'interest cost',
        'Total'
      ]
    }

    const configChart1 = {
      type: 'waterfall',
      'title': {
        'text': 'Net interest income',
        'font-size': 14,
        'font-weight': 'normal',
        'text-color': '#ffffff',
        'font-family': 'Roboto, sans-serif'
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
          'values': this.dataChart1Temp.values,
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
        // 'valueBox': {
        //   'backgroundColor': '#FFF',
        //   'decimals': 0,
        //   'text': '%v',
        //   'placement': 'top',
        //   'short': true,
        // },
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
        'labels': this.dataChart1Temp.labels,
        'font-color': 'rgb(0,0,0)',
        'line-color': 'rgb(200,200,200)',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'items-overlap': true,
        'max-items': this.dataChart1Temp.labels.length,
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

    const configChart2 = {
      type: 'waterfall',
      'title': {
        'text': 'Net interest income',
        'adjust-layout': true,
        'font-size': 14,
        'font-weight': 'normal',
        'text-color': '#ffffff',
        'font-family': 'Roboto, sans-serif'
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
          'values': this.dataChart2Temp.values,
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
      'plotarea': {
        'adjust-layout': true,
      },
      'plot': {
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
        'labels': this.dataChart2Temp.labels,
        'font-color': 'rgb(0,0,0)',
        'line-color': 'rgb(200,200,200)',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'items-overlap': true,
        'max-items': this.dataChart1Temp.labels.length,
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


    this.chart1 = {
      'graphset': [
        configChart1,
        configChart2
      ]
    };

    zingchart.render({
      id: 'myChart1',
      data: this.chart1.graphset[0]
    });

    zingchart.render({
      id: 'myChart2',
      data: this.chart1.graphset[1]
    });

    const dateTable: Array<{ name, value }> = new Array<{ name, value }>()

    for (const key in this.NIID) {
      if (this.NIID.hasOwnProperty(key)) {
        dateTable.push(
          {
            name: (key + '').replace(/_/gi, ' '),
            value: Number(this.NIID[key]).toFixed(2)
          }
        )
      }
    }

    this.single = dateTable;


    return dateTable;

  }

  clickRowGrid1 = (row) => {
    this.grid2.rowData = this.grid2Temp;
    const strFilter = row['data'].balance_position;
    let flap: boolean;
    this.grid1.api.forEachNode(function (node) {
      if (node.data.balance_position === strFilter) {
        if (node.isSelected()) {
          node.setSelected(false);
          flap = false;
        } else {
          node.setSelected(true);
          flap = true;
        }
      }
    });

    this.totalColumn1Grid2 = 0
    this.totalColumn2Grid2 = 0

    if (flap) {
      this.grid2.rowData = this.grid2Temp.filter((value, index) => {
        return value.balance_position === strFilter;
      });
      this.grid2.rowData.forEach((value, index) => {
        this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
        this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
      })
    } else {
      this.grid2.rowData = this.grid2Temp;
      this.grid2.rowData.forEach((value, index) => {
        this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
        this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
      })
    }

    this.grid2.api.setPinnedBottomRowData([]);

    this.grid2.api.setPinnedBottomRowData([{
      balance_position: 'Total',
      avg_vol: this.totalColumn1Grid2,
      costs: this.totalColumn2Grid2
    }]);
  }

  clickRowGrid2 = (row) => {
    this.grid1.rowData = this.grid1Temp;
    const strFilter = row['data'].balance_position;
    let flap: boolean;
    this.grid2.api.forEachNode(function (node) {
      if (node.data.balance_position === strFilter) {
        if (node.isSelected()) {
          node.setSelected(false);
          flap = false;
        } else {
          node.setSelected(true);
          flap = true;
        }
      }
    });

    this.totalColumn1Grid1 = 0
    this.totalColumn2Grid1 = 0

    if (flap) {
      this.grid1.rowData = this.grid1Temp.filter((value, index) => {
        return value.balance_position === strFilter;
      });
      this.grid1.rowData.forEach((value, index) => {
        this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
        this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
      })
    } else {
      this.grid1.rowData = this.grid1Temp;
      this.grid1.rowData.forEach((value, index) => {
        this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
        this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
      })
    }
  }

  clickRowGrid3 = (row) => {
    const strFilter = row['data'].name;
    let flap: boolean;
    this.grid3.api.forEachNode(function (node) {
      if (node.data.name === strFilter) {
        if (node.isSelected()) {
          node.setSelected(false);
          flap = false;
        } else {
          node.setSelected(true);
          flap = true;
        }
      }
    });
    if (flap) {
      const nameArray1: Array<string> = new Array<string>();
      const nameArray2: Array<string> = new Array<string>();
      let indexArray1;
      let indexArray2;


      let scaleXLabels: Array<string> = this.dataChart1Temp.labels;
      scaleXLabels.forEach((value, index) => {
        if (value.replace(/<br>| /gi, '') === strFilter.replace(/ /gi, '')) {
          nameArray1.push(value);
          indexArray1 = index;
        }
      })

      scaleXLabels = this.dataChart2Temp.labels;
      scaleXLabels.forEach((value, index) => {
        if (value.replace(/<br>| /gi, '') === strFilter.replace(/ /gi, '')) {
          nameArray2.push(value);
          indexArray2 = index;
        }
      })

      const chart1Values: Array<any> = this.dataChart1Temp.values.filter((value, index) => {
        return index === indexArray1;
      });

      const chart2Values: Array<any> = this.dataChart2Temp.values.filter((value, index) => {
        return index === indexArray2;
      });

      chart1Values.push('SUM');
      nameArray1.push('Total');
      chart2Values.push('SUM');
      nameArray2.push('Total');

      this.chart1.graphset[0].series[0].values = chart1Values;
      this.chart1.graphset[0]['scale-x'].labels = nameArray1;

      this.chart1.graphset[1].series[0].values = chart2Values;
      this.chart1.graphset[1]['scale-x'].labels = nameArray2;

      zingchart.exec('myChart1', 'destroy');
      zingchart.exec('myChart2', 'destroy');

      zingchart.render({
        id: 'myChart1',
        data: this.chart1.graphset[0]
      });

      zingchart.render({
        id: 'myChart2',
        data: this.chart1.graphset[1]
      });

    } else {
      this.chart1.graphset[0].series[0].values = this.dataChart1Temp.values;
      this.chart1.graphset[0]['scale-x'].labels = this.dataChart1Temp.labels;

      this.chart1.graphset[1].series[0].values = this.dataChart2Temp.values;
      this.chart1.graphset[1]['scale-x'].labels = this.dataChart2Temp.labels;

      zingchart.exec('myChart1', 'destroy');
      zingchart.exec('myChart2', 'destroy');

      zingchart.render({
        id: 'myChart1',
        data: this.chart1.graphset[0]
      });

      zingchart.render({
        id: 'myChart2',
        data: this.chart1.graphset[1]
      });
    }
  }

  groupByGrid(value: Array<any>, field: string): Array<any> {
    const groupedObj = value.reduce((prev, cur) => {
      if (!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});

    const dataTemp = Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));

    const dataReturn = new Array<{ balance_position, avg_vol, costs }>();

    dataTemp.map((value1, index) => {
      let avg_volTemp = 0;
      let costsTemp = 0;
      value1.value.forEach((value2, index2) => {
        avg_volTemp += parseFloat(value2.avg_vol);
        costsTemp += parseFloat(value2.costs);
      })

      dataReturn.push(
        {
          balance_position: value1.key,
          avg_vol: avg_volTemp,
          costs: costsTemp
        }
      );
    })

    return dataReturn
  }

  columnDefsFactory(nameGrid: string, columns: Array<Column>) {

    let paramsComponent;

    switch (nameGrid) {
      case 'grid1':
        paramsComponent = {
          onclick: this.clickRowGrid1,
          clickDisable: true
        };
        break;
      case 'grid2':
        paramsComponent = {
          onclick: this.clickRowGrid2,
          clickDisable: true
        };
        break;
    }

    const columnDefsGrid1: Array<ColDef> = new Array<ColDef>();
    columns.forEach((value, index) => {
      const column: ColDef = {};
      switch (value.col_data_type) {
        case Type_Column.NUMBER:
          column.headerName = value.col_name;
          column.hide = true;
          column.field = value.col_id;
          column.width = value.col_width;
          column.cellRendererFramework = CellGridComponent;
          column.cellRendererParams = paramsComponent;
          column.cellStyle = function (params) {
            return { 'text-align': 'right' };
          };
          column.headerClass = 'text-right',
            column.type = 'numericColumn';
          columnDefsGrid1.push(column);
          break;

        case Type_Column.DATE:
          column.headerName = value.col_name;
          column.hide = true;
          column.field = value.col_id;
          column.width = value.col_width;
          column.cellRendererFramework = CellGridComponent;
          column.cellRendererParams = paramsComponent;
          columnDefsGrid1.push(column);
          break;

        case Type_Column.STRING:
          column.headerName = value.col_name;
          column.hide = true;
          column.field = value.col_id;
          column.width = value.col_width;
          column.cellRendererFramework = CellGridComponent;
          column.cellRendererParams = paramsComponent;
          columnDefsGrid1.push(column);
          break;
      }
    });

    columnDefsGrid1.forEach((column, columnIndex) => {
      if (
        column.field === 'balance_position' ||
        column.field === 'avg_vol' ||
        column.field === 'costs'
      ) {
        column.hide = false;
      }
    });

    return columnDefsGrid1
  }

  getStrDate() {
    const strDate = this.date.toLocaleDateString().split('/');
    const strMonth = parseInt(strDate[1], 10) > 9 ? strDate[1] : '0' + strDate[1];
    const strday = parseInt(strDate[0], 10) > 9 ? strDate[0] : '0' + strDate[0];
    const fullDate: string = strDate[2] + '-' + strMonth + '-' + strday;

    // return fullDate;

    return fullDate;
  }

  load() {
    async.series(
      [
        (done) => {
          this.totalColumn1Grid1 = 0;
          this.totalColumn2Grid1 = 0;
          this.totalColumn1Grid2 = 0;
          this.totalColumn2Grid2 = 0;
          this.lrmReportService.getTestData2(this.getStrDate(), this.selectedValue.value).
          subscribe(
            (Response) => {
            this.hannaData.parse(Response._body);
            // this.hannaData = Response.data;
            if (this.hannaData.RetCode === -1) {

            } else {
              this.grid1.api.setColumnDefs(this.columnDefsFactory('grid1', this.hannaData.CashFlow.columns));
              this.grid2.api.setColumnDefs(this.columnDefsFactory('grid2', this.hannaData.CashFlow.columns));
              done(null);
            }
          },
             (error) => {
               this.lrmReportService.getData().then((response) => {
                this.hannaData.parse(response.data);
                if (this.hannaData.RetCode === -1) {

                } else {
                  this.grid1.api.setColumnDefs(this.columnDefsFactory('grid1', this.hannaData.CashFlow.columns));
                  this.grid2.api.setColumnDefs(this.columnDefsFactory('grid2', this.hannaData.CashFlow.columns));
                  done(null);
                }
               })
             })
        },
        (done) => {
          let grid1: Array<any> = this.hannaData.CashFlow.rows;
          grid1 = grid1.filter((value, index) => {
            return value.balance_side === 'Assets'
          });

          this.grid1.rowData = this.groupByGrid(grid1, 'balance_position');

          this.grid1Temp = this.groupByGrid(grid1, 'balance_position');

          this.grid1.rowData.forEach((value, index) => {
            this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
            this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
          })

          this.grid1.api.setPinnedBottomRowData([{
            balance_position: 'Total',
            avg_vol: this.totalColumn1Grid1,
            costs: this.totalColumn2Grid1,
          }]);

          let grid2: Array<any> = this.hannaData.CashFlow.rows;
          grid2 = grid2.filter((value, index) => {
            return value.balance_side === 'Liabilities & Equity'
          });

          this.grid2.rowData = this.groupByGrid(grid2, 'balance_position');
          this.grid2Temp = this.groupByGrid(grid2, 'balance_position');
          this.grid2.rowData.forEach((value, index) => {
            this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
            this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
          })

          this.grid2.api.setPinnedBottomRowData([{
            balance_position: 'Total',
            avg_vol: this.totalColumn1Grid2,
            costs: this.totalColumn2Grid2,
          }]);

          this.grid3.rowData = this.createDecomposition(this.hannaData.CashFlow.rows);

          done(null);
        }
      ],
      () => {
        this.grid1.api.sizeColumnsToFit();
        this.grid2.api.sizeColumnsToFit();
        this.grid3.api.sizeColumnsToFit();
      }
    );
  }

  refreshClick() {
    this.load()
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
     this.load();
    // let asd;
    // let errorMessage;

    // this.lrmReportService.getTestData()
    //   .subscribe(
    //   (data) => {
    //     asd = data
    //     console.log(data);
    //   },
    //   error => errorMessage = <any>error
    //   );


    //  this.lrmReportService.getTestData2(this.getStrDate(), this.selectedValue.value)
    //    .subscribe(
    //    (data) => {
    //     const hannadata = new HannaData();
    //     hannadata.parse(data._body);
    //     console.log(data);
    //    },
    //    (error) => {
    //     console.log(error);
    //    }
    //    );



  }

  ngAfterViewInit(): void {
  }


}
