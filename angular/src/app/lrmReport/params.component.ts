import { ICellEditorAngularComp } from 'ag-grid-angular/main';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'params-cell',
  template: '<div (click)="invokeParentMethod()">{{getValue.value}}</div>'
})
export class ParamsComponent implements ICellEditorAngularComp {
    public getValue: any;

    agInit(getValue: any): void {
        this.getValue = getValue;
    }

    public invokeParentMethod() {
        this.getValue.context.componentParent.clickRowGrid1(this.getValue);
    }

    refresh(): boolean {
        return false;
    }
}