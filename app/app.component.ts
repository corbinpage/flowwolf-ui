import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {DecisionComponent} from './decision/decision.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['Decisions']">Decisions</a>
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
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  { path: '/decisions', name: 'Decisions', component: DecisionComponent},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])

export class AppComponent {
  public title = 'Tour of Heroes';
}
