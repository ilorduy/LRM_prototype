import { ICellEditorAngularComp } from 'ag-grid-angular/main';
import { Component, ViewContainerRef } from '@angular/core';
import * as numeral from 'numeral';

@Component({
  selector: 'app-params-cell-grid3',
  template: `<div (click)="invokeParentMethod()">
  <span matTooltip="{{setValue(getValue)}}">{{setValue(getValue)}}</span>
  </div>`})
export class CellClickGrid3Component implements ICellEditorAngularComp {
    public getValue: any;

    agInit(getValue: any): void {
        this.getValue = getValue;
    }

    public invokeParentMethod() {
        // if (this.getValue.value !== 'Total') {
        //     this.getValue.context.componentParent.clickRowGrid3(this.getValue);
        //     }
    }

    public setValue(value) {
        if (value.colDef['type'] === 'numericColumn') {
            return numeral(value.value).format('0,0');
        }else {
            return value.value;
        }
    }

    refresh(): boolean {
        return false;
    }
}
