import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Rule} from './rule/rule';
import {RuleComponent} from './rule/rule.component';
import {Decision} from './decision';
import {DecisionService} from './decision.service';

@Component({
	selector: 'my-decision',
	templateUrl: 'app/components/decision/decision.component.html',
	directives: [RuleComponent],
	bindings: [DecisionService]
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

	toggleEditInputs() {
		this.editingInputs = !this.editingInputs;
		return false;
	}

	toggleEditOutputs() {
		this.editingOutputs = !this.editingOutputs;
		return false;
	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}