import { ICellEditorAngularComp } from 'ag-grid-angular/main';
import { Component, ViewContainerRef } from '@angular/core';
import * as numeral from 'numeral';

@Component({
  selector: 'app-params-cell-grid',
  template: `<div (click)="invokeParentMethod()">
                <span matTooltip="{{setValue(getValue)}}">{{setValue(getValue)}}</span>
                </div>`
})
export class CellGridComponent implements ICellEditorAngularComp {
    public getValue: any;

    agInit(getValue: any): void {
        getValue.clickDisable = getValue.clickDisable === undefined ? false : getValue.clickDisable;
        this.getValue = getValue;
    }

    public invokeParentMethod() {
        if (!this.getValue.clickDisable) {
            if (this.getValue.value !== 'Total') {
                this.getValue.onclick(this.getValue);
            }
        }
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

