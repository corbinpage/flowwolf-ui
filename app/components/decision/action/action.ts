import {Inject} from 'angular2/core';
export class Action {

  id: number;
  input: string;
  operator: string;
  values: any;
  editing: boolean;
  expression: string;

  constructor() {
    var data;
    if (data) {
      this.id = data.id ? data.id : -1;
      this.expression = data.expression;
    } else {
      this.id = -1;
      this.expression = "1 === 1";
    }
  }

  setData(data) {
    this.expression = data.expression;
  }
}