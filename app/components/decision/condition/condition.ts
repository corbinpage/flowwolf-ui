export class Condition{

  id: number;
  input: string;
  operator: string;
  values: any;
  editing: boolean

  constructor() {
    this.id = -1;
    this.input = "State";
    this.operator = '=';
    this.values = "NC";
  }
}