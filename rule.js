var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var condition_1 = require('condition');
var Rule = (function () {
    function Rule() {
        this.id = -1;
        this.editing = false;
        this.inputs = ['State', 'Revenue', 'Industry'];
        this.operators = ['=', '>', '<', 'between', '>=', '<=', '!=', 'in', '!in'];
        this.outputs = [{ output: "Decision", value: "Yes" }, { output: "Assignee", value: "CEO" }];
        this.conditions = [new condition_1.Condition(), new condition_1.Condition(), new condition_1.Condition()];
    }
    return Rule;
})();
exports.Rule = Rule;
//TypeScript
var RuleComponent = (function () {
    function RuleComponent() {
        this.rule = new Rule();
        this.missingText = "Not set";
        this.outputOptions = ["Decision", "Assignee", "Fire?"];
    }
    RuleComponent.prototype.toggleEdit = function () {
        this.rule.editing = !this.rule.editing;
    };
    RuleComponent.prototype.removeCondition = function (index) {
        this.rule.conditions.splice(index, 1);
    };
    RuleComponent.prototype.addCondition = function () {
        this.rule.conditions.push(new condition_1.Condition());
    };
    RuleComponent.prototype.updateInputValue = function (index, event) {
        var name = event.srcElement.name;
        var value = event.srcElement.value;
        this.rule.conditions[index][name] = value;
    };
    RuleComponent.prototype.updateOutputValue = function (index, event) {
        var name = event.srcElement.name;
        var value = event.srcElement.value;
        this.rule.outputs[index][name] = value;
    };
    RuleComponent = __decorate([
        angular2_1.Component({
            selector: 'my-rule'
        }),
        angular2_1.View({
            templateUrl: 'components/rule/rule.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], RuleComponent);
    return RuleComponent;
})();
exports.RuleComponent = RuleComponent;
