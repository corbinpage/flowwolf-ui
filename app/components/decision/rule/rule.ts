import {Condition} from '../condition/condition';

export class Rule {

	id: number;
	inputs: Array<string>;
	conditions: Array<Condition>;
	operators: Array<string>;
	outputs: Array<any>;
	editing: boolean;
	outputOptions: Array<string>;

	constructor() {
		this.id = this.id ? this.id : -1;
		this.editing = false;
		this.inputs = ['State', 'Revenue', 'Industry'];
		this.operators = ['=', '>', '<', 'between', '>=', '<=', '!=', 'in', '!in'];
		this.outputs = [{ output: "Decision", value: "Yes" }, { output: "Assignee", value: "CEO" }];
		this.conditions = [new Condition(), new Condition(), new Condition()];
		this.outputOptions = ["Decision", "Assignee", "Fire?"];
	}
}