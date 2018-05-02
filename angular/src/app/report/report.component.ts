import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReportService } from './report.service';
import {NumericEditorComponent} from "./numeric-editor.component";
import Handsontable from 'handsontable';
import { HotRegisterer } from 'angular-handsontable';

@Component({
  selector: 'report',
  templateUrl: './template.html',
  providers: [ReportService]
})
export class ReportComponent {

  constructor(private reportService: ReportService, public toastr: ToastsManager, vcr: ViewContainerRef, private _hotRegisterer: HotRegisterer) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  instance: string = "hotInstance";
  coordX: string;
  coordY: string;
  newValue: string;

  data: any[];
  colHeaders = [];
  rowHeaders = [];
  colWidths: number = 50;
  manualColumnResize = true;
  manualRowResize = true;

  

  //mergeCells = [
  //  { row: 1, col: 0, rowspan: 3, colspan: 1 }
  //]

  distinct = (arraySrc, field) => {
    var array = arraySrc.slice();
    var processed = [];
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i].hasOwnProperty(field)) {
        if (processed.indexOf(array[i][field]) < 0) {
          processed.push(array[i][field]);
        } else {
          array.splice(i, 1);
        }
      }
    }
    return array;
  }

  private currentForm = "";
  private currentSheet = "";

  private gridOptions = {
    onCellEditingStarted: function (event) {
      if (event.value == "NA" || event.rowIndex == 0) event.api.stopEditing(true);
    },
  };

  private rowData = [

  ];

  private columnDefs = [

  ];

  private entities = [
    { "entity": 90000 },
    { "entity": 90001 },
    { "entity": 90032 },
    { "entity": 90120 },
    { "entity": 99999 }
  ]

  private periods = [
    { "period": "2017" },
    { "period": "2017M1" },
    { "period": "2017M2" },
    { "period": "2017M3" },
    { "period": "2017M4" },
    { "period": "2017M5" },
    { "period": "2017M6" },
    { "period": "2017M7" },
    { "period": "2017M8" },
    { "period": "2017M9" },
    { "period": "2017M10" },
    { "period": "2017M11" },
    { "period": "2017M12" },
    { "period": "2017Q1" },
    { "period": "2017Q2" },
    { "period": "2017Q3" },
    { "period": "2017Q4" },
    { "period": "2017HY1" },
    { "period": "2017HY2" },
    { "period": "2018" },
    { "period": "2017M1" },
    { "period": "2017M2" },
    { "period": "2017M3" },
    { "period": "2017M4" },
    { "period": "2017M5" },
    { "period": "2017M6" },
    { "period": "2017M7" },
    { "period": "2017M8" },
    { "period": "2017M9" },
    { "period": "2017M10" },
    { "period": "2017M11" },
    { "period": "2017M12" },
    { "period": "2017Q1" },
    { "period": "2017Q2" },
    { "period": "2017Q3" },
    { "period": "2017Q4" },
    { "period": "2017HY1" },
    { "period": "2017HY2" }

  ]

  private views = [
    { "view": "YTD" },
    { "view": "PER" },
    { "view": "Note" }
  ]

  private sources = [
    { "source": "SAP BW" },
    { "source": "FSDP" },
    { "source": "EFI" },
    { "source": "SAS" },
    { "source": "FI" },
    { "source": "CO" },
    { "source": "Anacredit" },
    { "source": "Manual" },
    { "source": "Group Correction" },
    { "source": "Total" }
  ]

  private forms = [
    { "name": "OV1" },
    { "name": "TEST1" }
  ]

  private sheets = [

  ]

  selectForm = () => {
    this.currentSheet = "";
    this.rowData = [];
    this.columnDefs = [];
    if (this.currentForm == "") {
      this.sheets = [];
    } else {
      this.reportService.getJson("Forms/DPM_" + this.currentForm + ".json").then((response) => {
        this.sheets = response["sheets"];
      });
    }
  }

  load = () => {


    if (this.currentForm == "") {
      this.toastr.info("Please select a form", 'Info!');
      return;
    }
    if (this.sheets.length > 0 && this.currentSheet == "") {
      this.toastr.info("Please select a sheet", 'Info!');
      return;
    }
    var DPM = {
      columns: [],
      rows: [],
      form: "",
      cells: [],
      sheets: []
    };
    var tmpColumns = [
      {
        headerName: "",
        field: "rowId",
        width: 80,
        cellStyle: null,
        editable: false,
        cellEditorFramework: null
      },
      {
        headerName: "",
        field: "rowName",
        width: 340,
        cellStyle: null,
        editable: false,
        cellEditorFramework: null
      }
    ];
    var tmpData = [];
    var dataStorage = [];
    this.reportService.getJson("Forms/DPM_" + this.currentForm + ".json").then((response) => {
      DPM = response;
      //this.sheets = DPM.sheets;
      this.currentForm = DPM.form;
      this.reportService.getJson("Forms/DataStorage_" + this.currentForm + ".json").then((response2) => {
        dataStorage = response2.data;
        
        //add columns in grid from DPM
        var firstRecord = [""];
        var secondRecord = [""];
        for (var i = 0; i < DPM.columns.length; i++) {
          tmpColumns.push({
            headerName: DPM.columns[i]["ColumnCode"],
            field: DPM.columns[i]["ColumnCode"],
            width: 90,
            cellStyle: (params) => {
              if (params.value == 'NA') {
                return { color: '#d4cfcf', backgroundColor: '#d4cfcf' };
              } else {
                return null;
              }
            },
            editable: true,
            cellEditorFramework: NumericEditorComponent
          });
          firstRecord.push(DPM.columns[i]["ColumnCode"]);
          secondRecord.push(DPM.columns[i]["ColumnDescription"]);
        }
        this.colHeaders = firstRecord;
        tmpData.push(secondRecord);

        var disableCells = [];

        var firstColumn = [];
        //create data model:
        for (var i = 0; i < DPM.rows.length; i++) {
          firstColumn.push(DPM.rows[i]["RowCode"]);
          var record = [
            DPM.rows[i]["RowDescription"]
          ];
          for (var j = 0; j < DPM.columns.length; j++) {
            var value = "";
            // get Cell ID
            var rowID = DPM.rows[i]["RowCode"];
            var columnID = DPM.columns[j]["ColumnCode"];
            var cells = DPM.cells.filter((r) => {
              // z axis:
              return (r["RowCode"] == rowID && r["ColumnCode"] == columnID && r["SheetCode"] == this.currentSheet)
            });
            if (cells.length > 0) {
              var CellID = cells[0].CellID;
              var cell_values = dataStorage.filter((r) => {
                return (r["CellID"] == CellID)
              });
              if (cell_values.length > 0) {
                value = cell_values[0][cells[0].DataTypeLabel];
              }
              record.push(value);
            } else {
              disableCells.push({
                "x": record.length,
                "y": tmpData.length
              })
              record.push("");
            }


          }
          tmpData.push(record)
        }
        this.rowHeaders = firstColumn;
        var hot = this._hotRegisterer.getInstance(this.instance);
        hot.updateSettings({
          cells: (row, col, prop) => {
            var cellProperties = {};

            cellProperties["renderer"] = (instance, td, row, col, prop, value, cellProperties) => {
              Handsontable.renderers.TextRenderer.apply(this, [instance, td, row, col, prop, value, cellProperties]);

              if (row == 0 || col == 0) {
                td.style.background = '#f3f3f3';
              } else {
                if (!value || value === '') {
                  td.style.background = '#EEE';
                }
              }

            }
            //cellProperties["editor"] = 'numeric';

            if (col == 0 || row == 0) {
              cellProperties["editor"] = false;
              cellProperties["readOnly"] = true;
            } else {
              for (var i = 0; i < disableCells.length; i++) {
                if (row == disableCells[i]["y"] && col == disableCells[i]["x"]) {
                  cellProperties["editor"] = false;
                  cellProperties["readOnly"] = true;
                }
              }
            }


            return cellProperties;
          }
        }, false)

        this.columnDefs = tmpColumns;
        this.data = tmpData;


      });
    });
  }

  ngOnInit(): void {
    
    //hot.updateSettings({
    //  cells: function (row, col, prop) {
    //    var cellProperties = {};

    //    if (hot.getDataAtRowProp(row, prop) === 'NA') {
    //      cellProperties["editor"] = false;
    //    } else {
    //      cellProperties["editor"] = 'text';
    //    }

    //    return cellProperties;
    //  }
    //})
    //this.load();
  }

}
