System.register(['angular2/core', './rule', '../condition/condition'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, rule_1, condition_1;
    var RuleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rule_1_1) {
                rule_1 = rule_1_1;
            },
            function (condition_1_1) {
                condition_1 = condition_1_1;
            }],
        execute: function() {
            RuleComponent = (function () {
                function RuleComponent(rule) {
                    this.rule = rule;
                    this.name = this.rule.name;
                    this.missingText = "Not set";
                }
                RuleComponent.prototype.toggleEdit = function () {
                    this.rule.editing = !this.rule.editing;
                    return false;
                };
                RuleComponent.prototype.removeCondition = function (index) {
                    this.rule.conditions.splice(index, 1);
                    return false;
                };
                RuleComponent.prototype.addCondition = function () {
                    this.rule.conditions.push(new condition_1.Condition());
                    return false;
                };
                RuleComponent.prototype.addAction = function () {
                    this.rule.actions.push({ expression: "" });
                    return false;
                };
                // updateInputValue(index,event) {
                //   let name = event.srcElement.name;
                //   let value = event.srcElement.value;
                //   this.rule.conditions[index][name] = value;
                //   return false;
                // }
                // updateOutputValue(index, event) {
                //   let name = event.srcElement.name;
                //   let value = event.srcElement.value;
                //   this.rule.outputs[index][name] = value;
                //   return false;
                // }
                RuleComponent.prototype.updateInputExpression = function (index, event) {
                    var name = event.srcElement.name;
                    var value = event.srcElement.value;
                    this.rule.conditions[index][name] = value;
                    return false;
                };
                RuleComponent.prototype.updateOutputExpression = function (index, event) {
                    var name = event.srcElement.name;
                    var value = event.srcElement.value;
                    this.rule.outputs[index][name] = value;
                    return false;
                };
                RuleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-rule',
                        templateUrl: 'app/components/decision/rule/rule.component.html',
                        inputs: ['rule'],
                        bindings: [rule_1.Rule]
                    }),
                    __param(0, core_1.Inject(rule_1.Rule)), 
                    __metadata('design:paramtypes', [rule_1.Rule])
                ], RuleComponent);
                return RuleComponent;
            }());
            exports_1("RuleComponent", RuleComponent);
        }
    }
});
//# sourceMappingURL=rule.component.js.map