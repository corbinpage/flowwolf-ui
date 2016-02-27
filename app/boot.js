"use strict";
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var hero_service_1 = require('./hero.service');
var app_component_1 = require('./app.component');
//noinspection JSUnresolvedFunction
//noinspection TypeScriptValidateTypes
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    hero_service_1.HeroService
]);
//# sourceMappingURL=boot.js.map