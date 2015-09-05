/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, NgFor, NgIf} from 'angular2/angular2';

//TypeScript
@Component({
  selector: 'my-row',
  properties: ['rowId: row-id']
})

@View({
  templateUrl: 'views/row.html',
  directives: [NgFor, NgIf]
})

export class RowComponent {
  editable: boolean;

  constructor() {
    this.editable = false;
  }

  toggleEdit() {
    this.editable = !this.editable;
  }

}