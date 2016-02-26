import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Rule} from './rule/rule';
import {RuleComponent} from './rule/rule.component';
import {Decision} from './decision';
import {DecisionService} from './decision.service';
import {RunService} from '../run/run.service';

@Component({
	selector: 'my-decision',
	templateUrl: 'app/components/decision/decision.component.html',
	directives: [RuleComponent],
	bindings: [DecisionService, RunService]
})

export class DecisionComponent implements OnInit{
	public decision: Decision;
	public title: string;
	public rule: Rule;
	public editingInputs: boolean;
	public editingOutputs: boolean;

	constructor(private _decisionService: DecisionService, 
		private _routeParams: RouteParams) {
		this.editingInputs = false;
		this.editingOutputs = false;
		var thisDecisionComponent = this;

		if (!this.decision) {
			var id = +this._routeParams.get('id');
			this._decisionService.getDecision(id).then(function(decision) {
				thisDecisionComponent.decision = new Decision(decision);
				thisDecisionComponent.title = thisDecisionComponent.decision.name;

				if (thisDecisionComponent.decision.rules) {

				}

			});
		} else {
			thisDecisionComponent.title = "New Decision";
		}

	}

	ngOnInit() {

	}

	runDecision() {
		console.log("Starting run...");
		var run = new RunService(this.decision);
		run.setInputs(this.decision.inputs);
		run.setSession();
		run.run();
		console.log(run);
	}

	toggleCollapse(event) {
		this.collapseLinkActivated = true;
		var ibox = $(event.target).closest('div.ibox');
		var button = $(event.target).find('i');
		var content = ibox.find('div.ibox-content');
		content.slideToggle(200);
		button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
		ibox.toggleClass('').toggleClass('border-bottom');
		setTimeout(function() {
			ibox.resize();
			ibox.find('[id^=map-]').resize();
		}, 50);
	}

	toggleEdit($event) {
		let datatype = $(event.target).closest('.ibox').attr("data-type");

		if (datatype === "inputs") {
			this.editingInputs = !this.editingInputs;
		} else if (datatype === "outputs") {
			this.editingOutputs = !this.editingOutputs;
		}
		return false;
	}

	addRow(event) {
		let datatype = $(event.target).closest('.ibox').attr("data-type");

		this.decision[datatype].push({});

		if (datatype === 'inputs') {
			this.editingInputs = true;
		} else if (datatype === 'outputs') {
			this.editingOutputs = true;
		}
		// $('div[data-type=' + datatype + '] table tbody tr:last-of-type td input[name=name]').focus();

		return false;
	}

	removeRow(index, event) {
		let datatype = $(event.target).closest('.ibox').attr("data-type");

		this.decision[datatype].splice(index, 1);
		return false;
	}

	updateInput(index, event) {
		let name = event.srcElement.name;
		let value = event.srcElement.value;

		this.decision.inputs[index][name] = value;
		if (this.decision.outputs[index]["name"]) {
			this.decision.inputs[index]["slug"] = this.decision.inputs[index]["name"].replace(/ /i, "-");
		}
		return false;
	}

	updateOutput(index, event) {
		let name = event.srcElement.name;
		let value = event.srcElement.value;

		this.decision.outputs[index][name] = value;
		if(this.decision.outputs[index]["name"]) {
			this.decision.outputs[index]["slug"] = this.decision.outputs[index]["name"].replace(/ /i, "-");;
		}
		return false;
	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}