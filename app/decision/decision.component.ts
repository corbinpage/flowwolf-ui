import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'my-decision',
	templateUrl: 'app/decision/decision.component.html
})

export class DecisionComponent implements OnInit {
	public title = 'Flowwolf UI';
	// public heroes: Hero[] = [];

	// constructor(private _heroService: HeroService, private _router: Router) { }

	ngOnInit() {
		console.log("here");
		// this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	// gotoDetail(hero: Hero) {
	// 	this._router.navigate(['HeroDetail', { id: hero.id }]);
	// }
}
