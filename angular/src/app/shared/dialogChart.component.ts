import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as zingchart from 'zingchart';

@Component({
  selector: 'app-dialog-chart',
  templateUrl: 'dialog-chart.html',
})
export class DialogChartComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
