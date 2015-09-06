/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Condition} from 'condition';

export class Rule{

  id: number;
  inputs: Array<string>;
  conditions: Array<Condition>;
  operators: Array<string>;
  outputs: Array<string>;

  constructor() {
    this.id = -1;
    this.inputs = ['State','Revenue','Industry'];
    this.operators = ['=','>','<','between','>=','<=','!=','in','!in'];
    this.outputs = ['Decision','Assignee'];
    this.conditions = [new Condition(), new Condition(), new Condition()];
  }
} 


//TypeScript
@Component({
  selector: 'my-rule'
})

@View({
  templateUrl: 'components/rule/rule.html',
  directives: [NgFor, NgIf]
})

export class RuleComponent {
  rule: Rule;
  missingText: string;

  constructor() {
      this.rule = new Rule();
  }

  toggleEdit(index) {
    this.rule.conditions[index].editing = !this.rule.conditions[index].editing;
  }

  removeCondition(index){
    this.rule.conditions.splice(index,1);
  }

  addCondition() { 
    this.rule.conditions.push(new Condition());
  }

  updateValue(index,event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.conditions[index][name] = value;
  }

}