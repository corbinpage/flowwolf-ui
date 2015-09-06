/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Condition} from 'condition';

//TypeScript
@Component({
  selector: 'my-rule'
})

@View({
  templateUrl: 'views/rule.html',
  directives: [NgFor, NgIf]
})

export class RuleComponent {
  conditions: Array<Condition>;
  inserted: Object;
  missingText: string;
  inputOptions: Array<any>;
  outputOptions: Array<any>;
  operatorOptions: Array<any>;

  constructor() {
    this.conditions = [new Condition()];
    this.missingText = 'Not set';

    this.inputOptions = [
    {value: 1, text: 'State'},
    {value: 2, text:  'Revenue'},
    {value: 3, text:  'Industry'}
    ]; 

    this.outputOptions = [
    {value: 1, text: 'Decision'},
    {value: 2, text:  'Assignee'}
    ]; 

    this.operatorOptions = [
    {value: '='},
    {value: '>'},
    {value: '<' },
    {value: 'between'},
    {value: '>='},
    {value: '<='},
    {value: '!='},
    {value: 'in'},
    {value: '!in'}
    ]; 

  }

  toggleEdit(index) {
    this.conditions[index].editing = !this.conditions[index].editing;
  }

  showInput(value) {
    var selected = [];
    if(value) {
      selected = this.inputOptions.filter(function(d) {return d.value === value;})
    }
    return selected.length ? selected[0].text : this.missingText;
  }

  removeCondition(index){
    this.conditions.splice(index,1);
  }

  addCondition() { 
    this.conditions.push(new Condition());
  }

  saveCondition(index) {

  }

  updateValue(index,event) {
    let name = event.srcElement.name;
    let value = event.srcElement.value;

    if (name === "input") {
      value = Number(event.srcElement.value);
    }

    this.conditions[index][name] = value;
  }

}