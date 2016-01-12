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
	bindings: [DecisionService],
	inputs: ['decision']
})

export class DecisionComponent implements OnInit {
	public decision: Decision;
	public title: string;
	public rule: Rule;

	constructor(private _decisionService: DecisionService, 
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		if (!this.decision) {
			let id = +this._routeParams.get('id');
			this._decisionService.getDecision(1).then(function(decision) {
				this.decision = decision;
				this.title = this.decision.name;
			});
		} else {
			this.title = this.decision.name;
		}
		this.rule = new Rule();
	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}