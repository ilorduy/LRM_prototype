import { state } from '@angular/animations';
import { Component, OnInit, OnChanges, ViewContainerRef } from '@angular/core';
import * as d3 from 'd3';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { GridOptions, ColDef } from 'ag-grid';
import { GlobeReportService } from './globeReport.service';
import { CellGridComponent } from '../shared/cellGrid.component';
import { NIIDecomposition, Column, Type_Column, CashFlow, HannaData, Row } from '../shared/NIIDecomposition';

import { StatePosition } from './statePosition'
import * as async from 'async';

@Component({
  selector: 'app-globe-report',
  templateUrl: './template.html',
  providers: [GlobeReportService],
  styleUrls: ['./globeReport.component.css']
})
export class GlobeReportComponent implements OnInit, OnChanges {

  public currentGlobe
  public globe
  public container

  public grid1: GridOptions;
  public grid1Temp;
  public grid1Temp2;
  public totalColumn1Grid1 = 0;
  public totalColumn2Grid1 = 0;
  public totalColumn3Grid1 = 0;

  public grid2: GridOptions;
  public grid2Temp;
  public grid2Temp2;
  public totalColumn1Grid2 = 0;
  public totalColumn2Grid2 = 0;
  public totalColumn3Grid2 = 0;

  public grid3: GridOptions;
  public grid3Temp;
  public totalColumn1Grid3 = 0;
  public totalColumn2Grid3 = 0;
  public totalColumn3Grid3 = 0;

  public distanceXGlobeDefault = 3.0923889600674763;
  public distanceYGlobeDefault = 0.41359876309830446;
  public distanceZGlobeDefault = -10000;
  public distanceZGlobeZoom = 423.99999999999994;


  private currentForm = 'LRMData'
  public hannaData: HannaData = new HannaData();

  date = new Date('2017-01-01T06:00:10.000Z');
  selectedValue = { value: 'REAL ', viewValue: 'REAL ' };

  TYPE = [
    { value: 'REAL ', viewValue: 'ACTUAL' },
    { value: 'PLANNED', viewValue: 'SIMULATE' }
  ];

  constructor(private globeReportService: GlobeReportService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

    this.grid1  = <GridOptions>{
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

    this.grid2  = <GridOptions>{
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
        headerName: 'data',
        field: 'data',
        hide: true,
      },
      {
        headerName: 'State',
        field: 'state',
        cellRendererFramework: CellGridComponent,
        cellRendererParams: {
          onclick: this.clickRowGrid3
        },
        width: 60
      },
      {
        headerName: 'Avg. Volume',
        field: 'avg_vol',
        cellRendererFramework: CellGridComponent,
        cellRendererParams: {
          onclick: this.clickRowGrid3
        },
        cellStyle: function (params) {
          return { 'text-align': 'right' };
        },
        headerClass: 'text-right',
        type: 'numericColumn',
        width: 60
      },
      {
        headerName: 'Total marginal contribution Assets',
        field: 'total_margin_cont',
        cellRendererFramework: CellGridComponent,
        cellRendererParams: {
          onclick: this.clickRowGrid3
        },
        cellStyle: function (params) {
          return { 'text-align': 'right' };
        },
        headerClass: 'text-right',
        type: 'numericColumn',
        width: 60
      }
    ];

  }

  groupByGrid(value: Array<any>, field: string, type: string): Array<any> {
    const groupedObj = value.reduce((prev, cur) => {
      if (!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});

    const dataTemp = Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    let dataReturn;

    if (field === 'balance_position') {
      dataReturn = new Array<
        {
          balance_position,
          states,
          avg_vol,
          costs,
          total_margin_cont
        }>();

      dataTemp.map((value1, index) => {
        let avg_volTemp = 0;
        let costsTemp = 0;
        let total_margin_cont = 0;
        const states = new Array<string>();
        value1.value.forEach((value2, index2) => {
          avg_volTemp += parseFloat(value2.avg_vol);
          costsTemp += parseFloat(value2.costs);
          if (type === 'Assets') {
            total_margin_cont +=
              (parseFloat(value2.marg_cont_int) - parseFloat(value2.marg_cont_liq));
          } else {
            total_margin_cont +=
              (parseFloat(value2.marg_cont_int) + parseFloat(value2.marg_cont_liq));
          }
          states.push(value2.state);
        })

        dataReturn.push(
          {
            balance_position: value1.key,
            states: states,
            avg_vol: avg_volTemp,
            costs: costsTemp,
            total_margin_cont: total_margin_cont
          }
        );
      })
    } else {
      dataReturn = new Array<
        {
          state,
          balance_position,
          avg_vol,
          costs,
          total_margin_cont
        }>();

      dataTemp.map((value1, index) => {
        let avg_volTemp = 0;
        let costsTemp = 0;
        let total_margin_cont_Assets = 0;
        let total_margin_cont_le = 0;
        let total_margin_cont = 0;
        const balance_Position = new Array<string>()

        value1.value.forEach((value2, index2) => {
          avg_volTemp += parseFloat(value2.avg_vol);
          costsTemp += parseFloat(value2.costs);
          balance_Position.push(value2.balance_position);
        })

        value1.value.forEach((value2, index2) => {
          if (value2.balance_side === 'Assets') {
            total_margin_cont_Assets +=
              (parseFloat(value2.marg_cont_int) - parseFloat(value2.marg_cont_liq));
          }
          if (value2.balance_side === 'Liabilities & Equity') {
            total_margin_cont_le +=
              (parseFloat(value2.marg_cont_int) + parseFloat(value2.marg_cont_liq));
          }
        })

        total_margin_cont = total_margin_cont_Assets + total_margin_cont_le;

        dataReturn.push(
          {
            state: value1.key,
            balance_position: balance_Position,
            avg_vol: avg_volTemp,
            costs: costsTemp,
            total_margin_cont: Math.round(total_margin_cont)
          }
        );
      })
    }

    return dataReturn
  }

  getPositionstate(state: string, barHeight: number) {
    const stateToSearch = StatePosition.states.filter((value, index) => {
      return value.Name === state;
    });
    return [stateToSearch[0].Lat, stateToSearch[0].Long, barHeight];
  }

  getPositionBystate(state: string, barHeight: number) {
    const serie = new Array<any>();
    StatePosition.states.forEach((value, index) => {
      if (value.Name === state) {
        serie.push(value.Lat, value.Long, barHeight)
      } else {
        if (value.Name !== 'Head office') {
          serie.push(value.Lat, value.Long, 0)
        }
      }
    });
    return serie;
  }

  settime = function (globe, t) {
    return function () {
      new TWEEN.Tween(globe).to({ time: t / StatePosition.states.length }, 500).easing(TWEEN.Easing.Cubic.EaseOut).start();
    };
  };

  globeInit(data: Array<any>) {
    this.container = document.getElementById('container');
    if (!Detector.webgl) {
      Detector.addGetWebGLMessage();
    } else {
      this.globe = new DAT.Globe(this.container);
      this.currentGlobe = 'globeData';

      const tweens = [];

      TWEEN.start();

      const series = new Array<any>();
      const serie = new Array<number>();

      data.forEach((value, index) => {
        if (value.state !== 'Head office') {
          const position = this.getPositionstate(value.state, (value.total_margin_cont / 700))
          serie.push(position[0], position[1], position[2]);
        }
      })

      this.globe.addData(serie, { format: 'magnitude', name: 'all', animated: true });

      data.forEach((value, index) => {
        if (value.state !== 'Head office') {
          series.push(this.getPositionBystate(value.state, (value.total_margin_cont / 700)));
        }
      })

      for (let g = 0; g < series.length; g++) {
        this.globe.addData(series[g], { format: 'magnitude', name: 'serie' + g, animated: true });
      }

      this.globe.createPoints();
      // this.settime(this.globe, 0)();
      new TWEEN.Tween(this.globe).to({ time: 0 }, 500).easing(TWEEN.Easing.Cubic.EaseOut).start();
      this.globe.animate();
      document.body.style.backgroundImage = './backgroundImage'; // remove loading

      // 3.0923889600674763
      // 0.41359876309830446

      this.globe.setCamera(this.distanceXGlobeDefault, this.distanceYGlobeDefault , 0);



      // this.globeReportService.getJson('Forms/' + this.currentGlobe + '.json').then((response) => {
      //   const data1 = response
      //   // window.data = data;
      //   for (let g = 0; g < data1.length; g++) {
      //     this.globe.addData(data1[g][1], { format: 'legend', name: data1[g][0], animated: true });
      //   }
      //   this.globe.createPoints();
      //   this.settime(this.globe, 0)();
      //   this.globe.animate();
      //   document.body.style.backgroundImage = 'none'; // remove loading
      // });
    }
  }

  clickRowGrid1 = (row) => {
    const strFilter = row['data'].balance_position;
    // this.grid2.rowData = this.grid2Temp;
    this.grid3.rowData = this.groupByGrid(this.grid3Temp, 'state', '');

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

    // this.totalColumn1Grid2 = 0
    // this.totalColumn2Grid2 = 0
    // this.totalColumn3Grid2 = 0

    this.totalColumn1Grid3 = 0
    this.totalColumn2Grid3 = 0
    this.totalColumn3Grid3 = 0

    if (flap) {
      // this.grid2.rowData = this.grid2Temp.filter((value, index) => {
      //   return value.balance_position === strFilter;
      // });
      // this.grid2.rowData.forEach((value, index) => {
      //   this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
      //   this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
      //   this.totalColumn3Grid2 = this.totalColumn3Grid2 + parseFloat(value.total_margin_cont);
      // })

      // this.grid2.api.setPinnedBottomRowData([]);

      // this.grid2.api.setPinnedBottomRowData([{
      //   balance_position: 'Total',
      //   avg_vol: this.totalColumn1Grid2,
      //   costs: this.totalColumn2Grid2,
      //   total_margin_cont: this.totalColumn3Grid2
      // }]);

      this.grid3.rowData = this.groupByGrid(this.grid3Temp.filter((value, index) => {
        return value.balance_position === strFilter;
      }), 'state', '').filter((value, index) => {
        return value.balance_position.indexOf(strFilter) > -1;
      });

      this.grid3.rowData.forEach((value, index) => {
        this.totalColumn1Grid3 = this.totalColumn1Grid3 + parseFloat(value.avg_vol);
        this.totalColumn2Grid3 = this.totalColumn2Grid3 + parseFloat(value.costs);
        this.totalColumn3Grid3 = this.totalColumn3Grid3 + parseFloat(value.total_margin_cont);
      })

      this.grid3.api.setPinnedBottomRowData([]);

      this.grid3.api.setPinnedBottomRowData([{
        state: 'Total',
        avg_vol: this.totalColumn1Grid3,
        costs: this.totalColumn2Grid3,
        total_margin_cont: this.totalColumn3Grid3
      }]);


    } else {
      // this.grid2.rowData = this.grid2Temp;
      // this.grid2.rowData.forEach((value, index) => {
      //   this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
      //   this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
      //   this.totalColumn3Grid2 = this.totalColumn3Grid2 + parseFloat(value.total_margin_cont);
      // })

      // this.grid2.api.setPinnedBottomRowData([]);

      // this.grid2.api.setPinnedBottomRowData([{
      //   balance_position: 'Total',
      //   avg_vol: this.totalColumn1Grid2,
      //   costs: this.totalColumn2Grid2,
      //   total_margin_cont: this.totalColumn3Grid2
      // }]);

      this.grid3.rowData = this.groupByGrid(this.grid3Temp, 'state', '');
      this.grid3.rowData.forEach((value, index) => {
        this.totalColumn1Grid3 = this.totalColumn1Grid3 + parseFloat(value.avg_vol);
        this.totalColumn2Grid3 = this.totalColumn2Grid3 + parseFloat(value.costs);
        this.totalColumn3Grid3 = this.totalColumn3Grid3 + parseFloat(value.total_margin_cont);
      })

      this.grid3.api.setPinnedBottomRowData([]);

      this.grid3.api.setPinnedBottomRowData([{
        state: 'Total',
        avg_vol: this.totalColumn1Grid3,
        costs: this.totalColumn2Grid3,
        total_margin_cont: this.totalColumn3Grid3
      }]);
    }

  }

  clickRowGrid2 = (row) => {
    const strFilter = row['data'].balance_position;
    // this.grid1.rowData = this.grid1Temp;
    this.grid3.rowData = this.groupByGrid(this.grid3Temp, 'state', '');

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

    // this.totalColumn1Grid1 = 0
    // this.totalColumn2Grid1 = 0
    // this.totalColumn3Grid1 = 0

    this.totalColumn1Grid3 = 0
    this.totalColumn2Grid3 = 0
    this.totalColumn3Grid3 = 0

    if (flap) {
      // this.grid1.rowData = this.grid1Temp.filter((value, index) => {
      //   return value.balance_position === strFilter;
      // });
      // this.grid1.rowData.forEach((value, index) => {
      //   this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
      //   this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
      //   this.totalColumn3Grid1 = this.totalColumn3Grid1 + parseFloat(value.total_margin_cont);
      // })

      // this.grid1.api.setPinnedBottomRowData([]);

      // this.grid1.api.setPinnedBottomRowData([{
      //   balance_position: 'Total',
      //   avg_vol: this.totalColumn1Grid1,
      //   costs: this.totalColumn2Grid1,
      //   total_margin_cont: this.totalColumn3Grid1
      // }]);

      this.grid3.rowData = this.groupByGrid(this.grid3Temp.filter((value, index) => {
        return value.balance_position === strFilter;
      }), 'state', '').filter((value, index) => {
        return value.balance_position.indexOf(strFilter) > -1;
      });

      this.grid3.rowData.forEach((value, index) => {
        this.totalColumn1Grid3 = this.totalColumn1Grid3 + parseFloat(value.avg_vol);
        this.totalColumn2Grid3 = this.totalColumn2Grid3 + parseFloat(value.costs);
        this.totalColumn3Grid3 = this.totalColumn3Grid3 + parseFloat(value.total_margin_cont);
      })

      this.grid3.api.setPinnedBottomRowData([]);

      this.grid3.api.setPinnedBottomRowData([{
        state: 'Total',
        avg_vol: this.totalColumn1Grid3,
        costs: this.totalColumn2Grid3,
        total_margin_cont: this.totalColumn3Grid3
      }]);


    } else {
      // this.grid1.rowData = this.grid1Temp;
      // this.grid1.rowData.forEach((value, index) => {
      //   this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
      //   this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
      //   this.totalColumn3Grid1 = this.totalColumn3Grid1 + parseFloat(value.total_margin_cont);
      // })

      // this.grid1.api.setPinnedBottomRowData([]);

      // this.grid1.api.setPinnedBottomRowData([{
      //   balance_position: 'Total',
      //   avg_vol: this.totalColumn1Grid1,
      //   costs: this.totalColumn2Grid1,
      //   total_margin_cont: this.totalColumn3Grid1
      // }]);

      this.grid3.rowData = this.groupByGrid(this.grid3Temp, 'state', '');
      this.grid3.rowData.forEach((value, index) => {
        this.totalColumn1Grid3 = this.totalColumn1Grid3 + parseFloat(value.avg_vol);
        this.totalColumn2Grid3 = this.totalColumn2Grid3 + parseFloat(value.costs);
        this.totalColumn3Grid3 = this.totalColumn3Grid3 + parseFloat(value.total_margin_cont);
      })

      this.grid3.api.setPinnedBottomRowData([]);

      this.grid3.api.setPinnedBottomRowData([{
        state: 'Total',
        avg_vol: this.totalColumn1Grid3,
        costs: this.totalColumn2Grid3,
        total_margin_cont: this.totalColumn3Grid3
      }]);
    }

  }

  clickRowGrid3 = (row) => {
    this.grid1.rowData = this.groupByGrid(this.grid1Temp2, 'balance_position', 'Assets');
    this.grid2.rowData = this.groupByGrid(this.grid2Temp2, 'balance_position', 'Liabilities & Equity');
    const strFilter = row['data'].state;

    let flap: boolean;
    this.grid3.api.forEachNode(function (node) {
      if (node.data.state === strFilter) {
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
    this.totalColumn3Grid1 = 0

    this.totalColumn1Grid2 = 0
    this.totalColumn2Grid2 = 0
    this.totalColumn3Grid2 = 0

    if (flap) {
      let stateToSearch;
      let indexstate;
      StatePosition.states.forEach((value, index) => {
        if (value.Name === row['data'].state) {
          stateToSearch = value;
          indexstate = index + 1
        }
      });
      this.settime(this.globe, indexstate)();
      this.globe.setCamera(stateToSearch.CamPosX, stateToSearch.CamPosY, this.distanceZGlobeZoom);

      // grid1

      this.grid1.rowData =
        this.groupByGrid(this.grid1Temp2.filter((value, index) => {
          return value.state === strFilter;
        }), 'balance_position', 'Assets').filter((value, index) => {
          return value.states.indexOf(strFilter) > -1;
        });

      this.grid1.rowData.forEach((value, index) => {
        this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
        this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
        this.totalColumn3Grid1 = this.totalColumn3Grid1 + parseFloat(value.total_margin_cont);
      })

      this.grid1.api.setPinnedBottomRowData([]);

      this.grid1.api.setPinnedBottomRowData([{
        balance_position: 'Total',
        avg_vol: this.totalColumn1Grid1,
        costs: this.totalColumn2Grid1,
        total_margin_cont: this.totalColumn3Grid1
      }]);

      // grid2

      this.grid2.rowData =
        this.groupByGrid(this.grid2Temp2.filter((value, index) => {
          return value.state === strFilter;
        }), 'balance_position', 'Liabilities & Equity').filter((value, index) => {
          return value.states.indexOf(strFilter) > -1;
        });

      this.grid2.rowData.forEach((value, index) => {
        this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
        this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
        this.totalColumn3Grid2 = this.totalColumn3Grid2 + parseFloat(value.total_margin_cont);
      })

      this.grid2.api.setPinnedBottomRowData([]);

      this.grid2.api.setPinnedBottomRowData([{
        balance_position: 'Total',
        avg_vol: this.totalColumn1Grid2,
        costs: this.totalColumn2Grid2,
        total_margin_cont: this.totalColumn3Grid2
      }]);



    } else {
      this.settime(this.globe, 0)()
      this.globe.setCamera(this.distanceXGlobeDefault, this.distanceYGlobeDefault, this.distanceZGlobeDefault);

      this.grid1.rowData =
        this.groupByGrid(this.grid1Temp2, 'balance_position', 'Assets');

      this.grid1.rowData.forEach((value, index) => {
        this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
        this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
        this.totalColumn3Grid1 = this.totalColumn3Grid1 + parseFloat(value.total_margin_cont);
      })

      this.grid1.api.setPinnedBottomRowData([]);

      this.grid1.api.setPinnedBottomRowData([{
        balance_position: 'Total',
        avg_vol: this.totalColumn1Grid1,
        costs: this.totalColumn2Grid1,
        total_margin_cont: this.totalColumn3Grid1
      }]);

      this.grid2.rowData =
        this.groupByGrid(this.grid2Temp2, 'balance_position', 'Liabilities & Equity');

      this.grid2.rowData.forEach((value, index) => {
        this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
        this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
        this.totalColumn3Grid2 = this.totalColumn3Grid2 + parseFloat(value.total_margin_cont);
      })

      this.grid2.api.setPinnedBottomRowData([]);

      this.grid2.api.setPinnedBottomRowData([{
        balance_position: 'Total',
        avg_vol: this.totalColumn1Grid2,
        costs: this.totalColumn2Grid2,
        total_margin_cont: this.totalColumn3Grid2
      }]);
    }
  }

  columnDefsFactory(nameGrid: string, columns: Array<Column>) {

    let paramsComponent;

    switch (nameGrid) {
      case 'grid1':
        paramsComponent = {
          onclick: this.clickRowGrid1,
          clickDisable: false
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
        column.field === 'costs' ||
        column.field === 'total_margin_cont'
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

  load = () => {

    async.series(
      [
        (done) => {
          this.totalColumn1Grid1 = 0;
          this.totalColumn2Grid1 = 0;
          this.totalColumn3Grid1 = 0;
          this.totalColumn1Grid2 = 0;
          this.totalColumn2Grid2 = 0;
          this.totalColumn3Grid2 = 0;
          this.totalColumn1Grid3 = 0;
          this.totalColumn2Grid3 = 0;
          this.totalColumn3Grid3 = 0;
          this.globeReportService.getTestData2(this.getStrDate(), this.selectedValue.value).
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
               this.globeReportService.getData().then((response) => {
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
          this.grid1.rowData = this.groupByGrid(grid1, 'balance_position', 'Assets');
          this.grid1Temp = this.groupByGrid(grid1, 'balance_position', 'Assets');
          this.grid1Temp2 = grid1

          this.grid1.rowData.forEach((value, index) => {
            this.totalColumn1Grid1 = this.totalColumn1Grid1 + parseFloat(value.avg_vol);
            this.totalColumn2Grid1 = this.totalColumn2Grid1 + parseFloat(value.costs);
            this.totalColumn3Grid1 = this.totalColumn3Grid1 + parseFloat(value.total_margin_cont);
          })

          this.grid1.api.setPinnedBottomRowData([{
            balance_position: 'Total',
            avg_vol: this.totalColumn1Grid1,
            costs: this.totalColumn2Grid1,
            total_margin_cont: this.totalColumn3Grid1
          }]);

          let grid2: Array<any> = this.hannaData.CashFlow.rows;
          grid2 = grid2.filter((value, index) => {
            return value.balance_side === 'Liabilities & Equity'
          });
          this.grid2.rowData = this.groupByGrid(grid2, 'balance_position', 'Liabilities & Equity');
          this.grid2Temp = this.groupByGrid(grid2, 'balance_position', 'Liabilities & Equity');
          this.grid2Temp2 = grid2;
          this.grid2.rowData.forEach((value, index) => {
            this.totalColumn1Grid2 = this.totalColumn1Grid2 + parseFloat(value.avg_vol);
            this.totalColumn2Grid2 = this.totalColumn2Grid2 + parseFloat(value.costs);
            this.totalColumn3Grid2 = this.totalColumn3Grid2 + parseFloat(value.total_margin_cont);
          })

          this.grid2.api.setPinnedBottomRowData([{
            balance_position: 'Total',
            avg_vol: this.totalColumn1Grid2,
            costs: this.totalColumn2Grid2,
            total_margin_cont: this.totalColumn3Grid2
          }]);

          const grid3: Array<any> = this.hannaData.CashFlow.rows;
          this.grid3.rowData = this.groupByGrid(grid3, 'state', '');
          this.grid3Temp = this.hannaData.CashFlow.rows // this.groupByGrid(grid3, 'state', '');
          this.grid3.rowData.forEach((value, index) => {
            this.totalColumn1Grid3 = this.totalColumn1Grid3 + parseFloat(value.avg_vol);
            this.totalColumn2Grid3 = this.totalColumn2Grid3 + parseFloat(value.costs);
            this.totalColumn3Grid3 = this.totalColumn3Grid3 + parseFloat(value.total_margin_cont);
          })

          this.grid3.api.setPinnedBottomRowData([{
            state: 'Total',
            avg_vol: this.totalColumn1Grid3,
            costs: this.totalColumn2Grid3,
            total_margin_cont: this.totalColumn3Grid3
          }]);

          done(null);
        }
      ],
      () => {
        this.globeInit(this.grid3.rowData);
        this.grid1.api.sizeColumnsToFit();
        this.grid2.api.sizeColumnsToFit();
        this.grid3.api.sizeColumnsToFit();
      }
    );

  }

  refreshClick() {
    this.load()
  }

  ngOnInit() {
    this.load()
  }

  ngOnChanges() { }

}

