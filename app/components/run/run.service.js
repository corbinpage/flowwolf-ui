System.register(['angular2/core', '../decision/decision', './node-rules/index'], function(exports_1) {
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
    var core_1, decision_1, index_1;
    var RunService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (decision_1_1) {
                decision_1 = decision_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            RunService = (function () {
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
                    this.session = new index_1.RuleEngine(rules, { ignoreFactChanges: true });
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
            exports_1("RunService", RunService);
        }
    }
});
//# sourceMappingURL=run.service.js.map