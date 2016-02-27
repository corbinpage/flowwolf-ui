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
var decision_service_1 = require('./decision.service');
var DecisionDashboard = (function () {
    function DecisionDashboard(_decisionService, _router) {
        this._decisionService = _decisionService;
        this._router = _router;
        this.decisions = [];
    }
    DecisionDashboard.prototype.ngOnInit = function () {
        var _this = this;
        this._decisionService.getDecisions().then(function (decisions) { return _this.decisions = decisions; });
    };
    DecisionDashboard.prototype.gotoDetail = function (decision) {
        this._router.navigate(['DecisionComponent', { id: decision.id }]);
    };
    DecisionDashboard = __decorate([
        core_1.Component({
            selector: 'decision-dashboard',
            templateUrl: 'app/components/decision/decision.dashboard.html',
            styleUrls: ['app/components/decision/decision.dashboard.css'],
            bindings: [decision_service_1.DecisionService]
        }), 
        __metadata('design:paramtypes', [decision_service_1.DecisionService, router_1.Router])
    ], DecisionDashboard);
    return DecisionDashboard;
}());
exports.DecisionDashboard = DecisionDashboard;
//# sourceMappingURL=decision.dashboard.js.map