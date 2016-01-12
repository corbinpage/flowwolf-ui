import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {DecisionDashboard} from './components/decision/decision.dashboard';
import {DecisionComponent} from './components/decision/decision.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['DecisionDashboard', {id: '1' } ]">Decisions</a>
    <span> | </span>
    <a [routerLink]="['Heroes']">Heroes</a>
    <span> | </span>
    <a [routerLink]="['Dashboard']">HeroDash</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    a:visited, a:link {color: #444;}
    a:hover {color: white; background-color: #1171a3;}
    a.router-link-active {color: white; background-color: #52b9e9;}
  `],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/decisions', name: 'DecisionDashboard', component: DecisionDashboard, useAsDefault: true},
  {path: '/decisions/:id', name: 'DecisionComponent', component: DecisionComponent},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent},

])

export class AppComponent {
  public title = 'Flowwolf UI';
}
