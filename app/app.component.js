"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var decision_dashboard_1 = require('./components/decision/decision.dashboard');
var decision_component_1 = require('./components/decision/decision.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Flowwolf UI';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            // styles: [`
            //   a:visited, a:link {color: #444;}
            //   a:hover {color: white; background-color: #1171a3;}
            //   a.router-link-active {color: white; background-color: #52b9e9;}
            // `],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/decisions', name: 'DecisionDashboard', component: decision_dashboard_1.DecisionDashboard, useAsDefault: true },
            { path: '/decisions/:id', name: 'DecisionComponent', component: decision_component_1.DecisionComponent },
            { path: '/heroes', name: 'Heroes', component: heroes_component_1.HeroesComponent },
            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
            { path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map