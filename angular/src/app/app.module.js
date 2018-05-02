var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var mydatepicker_1 = require('mydatepicker');
var animations_1 = require('@angular/platform-browser/animations');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var main_1 = require('ag-grid-angular/main');
var angular_handsontable_1 = require('angular-handsontable');
var configuration_service_1 = require('./configuration.service');
var app_component_1 = require('./home/app.component');
var menu_component_1 = require('./menu/menu.component');
var report_component_1 = require('./report/report.component');
var tree_component_1 = require('./tree/tree.component');
var numeric_editor_component_1 = require("./report/numeric-editor.component");
function configServiceFactory(config) {
    return function () { return config.getConfiguration("url"); };
}
exports.configServiceFactory = configServiceFactory;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                mydatepicker_1.MyDatePickerModule,
                ng2_toastr_1.ToastModule.forRoot(),
                main_1.AgGridModule.withComponents([numeric_editor_component_1.NumericEditorComponent]),
                angular_handsontable_1.HotTableModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'reg-report',
                        component: report_component_1.ReportComponent
                    }
                ]),
                ng_bootstrap_1.NgbModule.forRoot(),
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                report_component_1.ReportComponent,
                tree_component_1.TreeComponent,
                numeric_editor_component_1.NumericEditorComponent
            ],
            providers: [
                configuration_service_1.ConfigurationService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: configServiceFactory,
                    deps: [configuration_service_1.ConfigurationService],
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
