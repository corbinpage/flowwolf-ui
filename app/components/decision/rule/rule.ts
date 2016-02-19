import {Inject} from 'angular2/core'; 
import {Condition} from '../condition/condition';
import {Action} from '../action/action';

export class Rule {

	id: number;
	order: number;
	inputs: Array<string>;
	conditions: Array<Condition>;
	actions: Array<Action>;
	operators: Array<string>;
	outputs: Array<any>;
	editing: boolean;
	outputOptions: Array<string>;

	constructor() {
		var data;
		if(data) {
			this.name = data.name;
			this.order = data.order;
			this.conditions = data.conditions.map(function(c) {
				return new Condition(c);
			})
		} else {
			this.id = this.id ? this.id : -1;
			this.editing = false;
		} 
	}

	setData(data) {
		this.name = data.name;
		this.order = data.order;

		this.conditions = data.conditions.map(function(c) {
			var newCondition = new Condition;
			newCondition.setData(c);
			return newCondition;
		})

		this.actions = data.actions.map(function(a) {
			var newAction = new Action;
			newAction.setData(a);
			return newAction;
		})
	}

}