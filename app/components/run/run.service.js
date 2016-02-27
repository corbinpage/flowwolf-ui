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
var decision_1 = require('../decision/decision');
// var jsonLogic = require('../logic.js');
// import {RuleEngine} from './node-rules/index';
var RunService = (function () {
    function RunService(decision) {
        this.decision = decision;
        this.inputs = {};
        this.outputs = {};
        this.setSession(decision.rules);
    }
    RunService.prototype.setInputs = function (inputs) {
        this.inputs = inputs;
    };
    RunService.prototype.setSession = function () {
        var thisService = this;
        var rules = this.decision.rules.map(function (r) {
            return thisService.setRule(r);
        });
        thisSession = {};
        // this.session = new RuleEngine(rules, { ignoreFactChanges: true });
    };
    ;
    RunService.prototype.setRule = function (ruleData) {
        var rule = {};
        rule['name'] = ruleData.name;
        rule['priority'] = 1000 - ruleData.order;
        // rule['condition'] = models.Condition.formatForNodeRules(ruleData.Conditions);
        // rule['condition'] = ruleData.Conditions;
        // rule['consequence'] = ruleData.Actions;
        // rule.['consequence'] = models.Action.formatForNodeRules(ruleData.Actions);
        return rule;
    };
    RunService.prototype.run = function () {
        console.log(this.session);
        this.session.execute(this.inputs, function (data, conditionRuns) {
            console.log("We ran!");
            console.log(data);
            console.log(conditionRuns);
        });
    };
    RunService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [decision_1.Decision])
    ], RunService);
    return RunService;
}());
exports.RunService = RunService;
//# sourceMappingURL=run.service.js.map