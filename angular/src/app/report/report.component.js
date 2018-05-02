var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var report_service_1 = require('./report.service');
var numeric_editor_component_1 = require("./numeric-editor.component");
var handsontable_1 = require('handsontable');
var ReportComponent = (function () {
    function ReportComponent(reportService, toastr, vcr, _hotRegisterer) {
        var _this = this;
        this.reportService = reportService;
        this.toastr = toastr;
        this._hotRegisterer = _hotRegisterer;
        this.instance = "hotInstance";
        this.colHeaders = [];
        this.rowHeaders = [];
        this.colWidths = 50;
        this.manualColumnResize = true;
        this.manualRowResize = true;
        //mergeCells = [
        //  { row: 1, col: 0, rowspan: 3, colspan: 1 }
        //]
        this.distinct = function (arraySrc, field) {
            var array = arraySrc.slice();
            var processed = [];
            for (var i = array.length - 1; i >= 0; i--) {
                if (array[i].hasOwnProperty(field)) {
                    if (processed.indexOf(array[i][field]) < 0) {
                        processed.push(array[i][field]);
                    }
                    else {
                        array.splice(i, 1);
                    }
                }
            }
            return array;
        };
        this.currentForm = "";
        this.currentSheet = "";
        this.gridOptions = {
            onCellEditingStarted: function (event) {
                if (event.value == "NA" || event.rowIndex == 0)
                    event.api.stopEditing(true);
            },
        };
        this.rowData = [];
        this.columnDefs = [];
        this.entities = [
            { "entity": 90000 },
            { "entity": 90001 },
            { "entity": 90032 },
            { "entity": 90120 },
            { "entity": 99999 }
        ];
        this.periods = [
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
        ];
        this.views = [
            { "view": "YTD" },
            { "view": "PER" },
            { "view": "Note" }
        ];
        this.sources = [
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
        ];
        this.forms = [
            { "name": "OV1" },
            { "name": "TEST1" }
        ];
        this.sheets = [];
        this.selectForm = function () {
            _this.currentSheet = "";
            _this.rowData = [];
            _this.columnDefs = [];
            if (_this.currentForm == "") {
                _this.sheets = [];
            }
            else {
                _this.reportService.getJson("Forms/DPM_" + _this.currentForm + ".json").then(function (response) {
                    _this.sheets = response["sheets"];
                });
            }
        };
        this.load = function () {
            if (_this.currentForm == "") {
                _this.toastr.info("Please select a form", 'Info!');
                return;
            }
            if (_this.sheets.length > 0 && _this.currentSheet == "") {
                _this.toastr.info("Please select a sheet", 'Info!');
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
            _this.reportService.getJson("Forms/DPM_" + _this.currentForm + ".json").then(function (response) {
                DPM = response;
                //this.sheets = DPM.sheets;
                _this.currentForm = DPM.form;
                _this.reportService.getJson("Forms/DataStorage_" + _this.currentForm + ".json").then(function (response2) {
                    dataStorage = response2.data;
                    //add columns in grid from DPM
                    var firstRecord = [""];
                    var secondRecord = [""];
                    for (var i = 0; i < DPM.columns.length; i++) {
                        tmpColumns.push({
                            headerName: DPM.columns[i]["ColumnCode"],
                            field: DPM.columns[i]["ColumnCode"],
                            width: 90,
                            cellStyle: function (params) {
                                if (params.value == 'NA') {
                                    return { color: '#d4cfcf', backgroundColor: '#d4cfcf' };
                                }
                                else {
                                    return null;
                                }
                            },
                            editable: true,
                            cellEditorFramework: numeric_editor_component_1.NumericEditorComponent
                        });
                        firstRecord.push(DPM.columns[i]["ColumnCode"]);
                        secondRecord.push(DPM.columns[i]["ColumnDescription"]);
                    }
                    _this.colHeaders = firstRecord;
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
                            var cells = DPM.cells.filter(function (r) {
                                // z axis:
                                return (r["RowCode"] == rowID && r["ColumnCode"] == columnID && r["SheetCode"] == _this.currentSheet);
                            });
                            if (cells.length > 0) {
                                var CellID = cells[0].CellID;
                                var cell_values = dataStorage.filter(function (r) {
                                    return (r["CellID"] == CellID);
                                });
                                if (cell_values.length > 0) {
                                    value = cell_values[0][cells[0].DataTypeLabel];
                                }
                                record.push(value);
                            }
                            else {
                                disableCells.push({
                                    "x": record.length,
                                    "y": tmpData.length
                                });
                                record.push("");
                            }
                        }
                        tmpData.push(record);
                    }
                    _this.rowHeaders = firstColumn;
                    var hot = _this._hotRegisterer.getInstance(_this.instance);
                    hot.updateSettings({
                        cells: function (row, col, prop) {
                            var cellProperties = {};
                            cellProperties["renderer"] = function (instance, td, row, col, prop, value, cellProperties) {
                                handsontable_1.default.renderers.TextRenderer.apply(_this, [instance, td, row, col, prop, value, cellProperties]);
                                if (row == 0 || col == 0) {
                                    td.style.background = '#f3f3f3';
                                }
                                else {
                                    if (!value || value === '') {
                                        td.style.background = '#EEE';
                                    }
                                }
                            };
                            //cellProperties["editor"] = 'numeric';
                            if (col == 0 || row == 0) {
                                cellProperties["editor"] = false;
                                cellProperties["readOnly"] = true;
                            }
                            else {
                                for (var i = 0; i < disableCells.length; i++) {
                                    if (row == disableCells[i]["y"] && col == disableCells[i]["x"]) {
                                        cellProperties["editor"] = false;
                                        cellProperties["readOnly"] = true;
                                    }
                                }
                            }
                            return cellProperties;
                        }
                    }, false);
                    _this.columnDefs = tmpColumns;
                    _this.data = tmpData;
                });
            });
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ReportComponent.prototype.ngOnInit = function () {
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
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            templateUrl: './template.html',
            providers: [report_service_1.ReportService]
        })
    ], ReportComponent);
    return ReportComponent;
})();
exports.ReportComponent = ReportComponent;
