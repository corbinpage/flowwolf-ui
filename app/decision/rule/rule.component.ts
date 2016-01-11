import {Component} from 'angular2/core';
import {Condition} from './condition';

export class Rule{

  id: number;
  inputs: Array<string>;
  conditions: Array<Condition>;
  operators: Array<string>;
  outputs: Array<any>;
  editing: boolean;
  outputOptions: Array<string>;

  constructor() {
    this.id = -1;
    this.editing = false;
    this.inputs = ['State','Revenue','Industry'];
    this.operators = ['=','>','<','between','>=','<=','!=','in','!in'];
    this.outputs = [{output: "Decision", value: "Yes"}, {output: "Assignee", value: "CEO"}];
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
      this.missingText = "Not set"; 

      this.outputOptions = ["Decision", "Assignee", "Fire?"];
  }

  toggleEdit() {
    this.rule.editing = !this.rule.editing;
  }

  removeCondition(index){
    this.rule.conditions.splice(index,1);
  }

  addCondition() { 
    this.rule.conditions.push(new Condition());
  }

  addOutput() { 
    this.rule.outputs.push({output: "", value: "" });
  }

  updateInputValue(index,event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.conditions[index][name] = value;
  }

  updateOutputValue(index,event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.outputs[index][name] = value;
  }

}