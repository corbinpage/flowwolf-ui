export class Condition{

  id: number;
  input: number;
  operator: string;
  values: any;
  output: any;
  editing: boolean

  constructor() {
    this.id = -1;
    this.input = 1;
    this.operator = '=';
    this.editing = false;
  }
}