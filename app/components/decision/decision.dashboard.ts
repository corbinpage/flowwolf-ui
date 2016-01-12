import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Decision} from './decision';
import {DecisionService} from './decision.service';
import {DecisionComponent} from './decision.component';

import {Hero} from '../../hero';
import {HeroService} from '../../hero.service';

@Component({
  selector: 'decision-dashboard',
  templateUrl: 'app/components/decision/decision.dashboard.html',
  styleUrls: ['app/components/decision/decision.dashboard.css'],
  bindings: [DecisionService]
})

export class DecisionDashboard implements OnInit {
  public decisions: Decision[] = [];

  constructor(private _decisionService: DecisionService, private _router: Router) { }

  ngOnInit() {
    this._decisionService.getDecisions().then(decisions => this.decisions = decisions);
  }

  gotoDetail(decision: Decision) {
    this._router.navigate(['DecisionComponent', { id: 1 }]);
  }
}
