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

	constructor(private _decisionService: DecisionService, 
		private _routeParams: RouteParams) {
		var thisDecisionComponent = this;

		if (!this.decision) {
			var id = +this._routeParams.get('id');
			this._decisionService.getDecision(id).then(function(decision) {
				thisDecisionComponent.decision = decision;
				thisDecisionComponent.title = thisDecisionComponent.decision.name;

				if (thisDecisionComponent.decision.rules) {
					var ruleObjects = thisDecisionComponent.decision.rules.map(function(ruleData) {
						var newRule = new Rule();
						console.log(newRule);
						console.log(ruleData);
						newRule.setData(ruleData);
						console.log(newRule);
						return newRule;
					});
					console.log(ruleObjects);
					thisDecisionComponent.decision.rules = ruleObjects;
				}

			});
		} else {
			thisDecisionComponent.title = "New Decision";
		}

	}

	ngOnInit() {

	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}