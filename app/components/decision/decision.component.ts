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
		this.decision = { "id": 2, "name": "Beta" };
		this.title = this.decision.name;
	}

	ngOnInit() {
	// 	if (!this.decision) {
	// 		this.decision = new Decision({ "id": 2, "name": "Beta" });
			// let id = +this._routeParams.get('id');
			// this._decisionService.getDecision(1).then(function(decision) {
				// this.decision = decision;
				// this.title = this.decision.name;
			// });
		// } 

	// 	this.title = this.decision.name;
	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}