System.register(['angular2/core', 'angular2/router', './heroes.component', './hero-detail.component', './dashboard.component', './components/decision/decision.dashboard', './components/decision/decision.component'], function(exports_1) {
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
    var core_1, router_1, heroes_component_1, hero_detail_component_1, dashboard_component_1, decision_dashboard_1, decision_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (decision_dashboard_1_1) {
                decision_dashboard_1 = decision_dashboard_1_1;
            },
            function (decision_component_1_1) {
                decision_component_1 = decision_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Flowwolf UI';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <a [routerLink]=\"['DecisionDashboard', {id: '1' } ]\">Decisions</a>\n    <span> | </span>\n    <a [routerLink]=\"['Heroes']\">Heroes</a>\n    <span> | </span>\n    <a [routerLink]=\"['Dashboard']\">HeroDash</a>\n    <router-outlet></router-outlet>\n  ",
                        styles: ["\n    a:visited, a:link {color: #444;}\n    a:hover {color: white; background-color: #1171a3;}\n    a.router-link-active {color: white; background-color: #52b9e9;}\n  "],
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
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map