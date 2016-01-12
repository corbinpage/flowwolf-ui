import {Component, OnInit} from 'angular2/core';
import {Rule} from './rule';
import {Condition} from '../condition/condition';

@Component({
  selector: 'my-rule',
  templateUrl: 'app/components/decision/rule/rule.component.html'
})

export class RuleComponent {
  rule: Rule;
  missingText: string;

  constructor() {
    this.rule = new Rule();
    this.missingText = "Not set"; 

    this.rule.outputOptions = ["Decision", "Assignee", "Fire?"];
  }

  toggleEdit() {
    this.rule.editing = !this.rule.editing;
    return false;
  }

  removeCondition(index){
    this.rule.conditions.splice(index,1);
    return false;
  }

  addCondition() { 
    this.rule.conditions.push(new Condition());
    return false;
  }

  addOutput() { 
    this.rule.outputs.push({output: "", value: "" });
    return false;
  }

  updateInputValue(index,event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.conditions[index][name] = value;
    return false;
  }

  updateOutputValue(index,event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.outputs[index][name] = value;
    return false;
  }

}