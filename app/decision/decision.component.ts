import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Rule} from './rule/rule';
import {RuleComponent} from './rule/rule.component';

@Component({
	selector: 'my-decision',
	templateUrl: 'app/decision/decision.component.html',
	directives: [RuleComponent]
})

export class DecisionComponent implements OnInit {
	public title = 'Flowwolf UI';
	public rule;

	constructor(private _router: Router) { }

	ngOnInit() {
		this.rule = new Rule();
		console.log("here");
		// this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}