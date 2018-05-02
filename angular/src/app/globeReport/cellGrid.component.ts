import { ICellEditorAngularComp } from 'ag-grid-angular/main';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-params-cell-grid',
  template: `<div (click)="invokeParentMethod()">
                <span matTooltip="{{setValue(getValue)}}">{{setValue(getValue)}}</span>
                </div>`
})
export class CellGridComponent implements ICellEditorAngularComp {
    public getValue: any;

    agInit(getValue: any): void {
        this.getValue = getValue;
    }

    public invokeParentMethod() {
        if (this.getValue.value !== 'Total') {
        this.getValue.onclick(this.getValue);
        }
    }

    public setValue(value) {
        if (value.colDef['type'] === 'numericColumn') {
            return Number(value.value).toFixed(2);
        }else {
            return value.value;
        }
    }

    refresh(): boolean {
        return false;
    }
}

