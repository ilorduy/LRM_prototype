import { DialogChartComponent } from './shared/dialogChart.component';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AgGridModule } from 'ag-grid-angular/main';
import { HotTableModule } from 'angular-handsontable';
import { ConfigurationService } from './configuration.service';
import { AppSettings } from './appSettings';
import { AppComponent } from './home/app.component';
import { MenuComponent } from './menu/menu.component';
import { ReportComponent } from './report/report.component';
import { TreeComponent } from './tree/tree.component';
import { NumericEditorComponent } from './report/numeric-editor.component';


import { LrmReportComponent } from './lrmReport/lrmReport.component';
import { CellClickGrid1Component } from './lrmReport/cellClickGrid1.component';
import { CellClickGrid2Component } from './lrmReport/cellClickGrid2.component';
import { CellClickGrid3Component } from './lrmReport/cellClickGrid3.component';

import { GlobeReportComponent } from './globeReport/globeReport.component';
import { CellGridComponent } from './shared/cellGrid.component';

import { LcrReportComponent } from './lcrReport/lcrReport.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
  MatFormFieldControl,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';

export function configServiceFactory(config: ConfigurationService) {
  return () => config.getConfiguration('url');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    MyDatePickerModule,
    ToastModule.forRoot(),
    AgGridModule.withComponents(
      [
        NumericEditorComponent,
        CellClickGrid1Component,
        CellClickGrid2Component,
        CellClickGrid3Component,
        CellGridComponent
      ]
    ),
    MatFormFieldModule,
    HotTableModule,
    NgxChartsModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,    
    RouterModule.forRoot([
      {
        path: 'reg-report',
        component: ReportComponent
      },
      {
        path: 'app-lrm-report',
        component: LrmReportComponent
      },
      {
        path: 'app-globe-report',
        component: GlobeReportComponent
      },
      {
        path: 'app-lcr-report',
        component: LcrReportComponent
      }
    ]),
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    ReportComponent,
    TreeComponent,
    NumericEditorComponent,
    LrmReportComponent,
    LcrReportComponent,
    CellClickGrid1Component,
    CellClickGrid2Component,
    CellClickGrid3Component,
    GlobeReportComponent,
    CellGridComponent,
    DialogChartComponent,
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogChartComponent]
})
export class AppModule {
}
