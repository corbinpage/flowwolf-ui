import {Component, OnInit, Inject} from 'angular2/core';
import {Rule} from './rule';
import {Condition} from '../condition/condition';

@Component({
  selector: 'my-rule',
  templateUrl: 'app/components/decision/rule/rule.component.html',
  inputs: ['rule'],
  bindings: [Rule]
})

export class RuleComponent {
  rule: Rule;
  name: string;
  missingText: string;

  constructor(@Inject(Rule) rule: Rule) {
    this.rule = rule;
    this.name = this.rule.name;
    this.missingText = "Not set"; 
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

  addAction() { 
    this.rule.actions.push({expression: "" });
    return false;
  }

  // updateInputValue(index,event) {
  //   let name = event.srcElement.name;
  //   let value = event.srcElement.value;

  //   this.rule.conditions[index][name] = value;
  //   return false;
  // }

  // updateOutputValue(index, event) {
  //   let name = event.srcElement.name;
  //   let value = event.srcElement.value;

  //   this.rule.outputs[index][name] = value;
  //   return false;
  // }

  updateInputExpression(index, event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.conditions[index][name] = value;
    return false;
  }

  updateOutputExpression(index, event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    this.rule.outputs[index][name] = value;
    return false;
  }



}