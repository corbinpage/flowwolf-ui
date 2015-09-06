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
//TypeScript
var RuleComponent = (function () {
    function RuleComponent() {
        this.conditions = [new condition_1.Condition()];
        this.missingText = 'Not set';
        this.inputOptions = [
            { value: 1, text: 'State' },
            { value: 2, text: 'Revenue' },
            { value: 3, text: 'Industry' }
        ];
        this.outputOptions = [
            { value: 1, text: 'Decision' },
            { value: 2, text: 'Assignee' }
        ];
        this.operatorOptions = [
            { value: '=' },
            { value: '>' },
            { value: '<' },
            { value: 'between' },
            { value: '>=' },
            { value: '<=' },
            { value: '!=' },
            { value: 'in' },
            { value: '!in' }
        ];
    }
    RuleComponent.prototype.toggleEdit = function (index) {
        this.conditions[index].editing = !this.conditions[index].editing;
    };
    RuleComponent.prototype.showInput = function (value) {
        var selected = [];
        if (value) {
            selected = this.inputOptions.filter(function (d) { return d.value === value; });
        }
        return selected.length ? selected[0].text : this.missingText;
    };
    RuleComponent.prototype.removeCondition = function (index) {
        this.conditions.splice(index, 1);
    };
    RuleComponent.prototype.addCondition = function () {
        this.conditions.push(new condition_1.Condition());
    };
    RuleComponent.prototype.saveCondition = function (index) {
    };
    RuleComponent.prototype.updateValue = function (index, event) {
        var name = event.srcElement.name;
        var value = event.srcElement.value;
        if (name === "input") {
            value = Number(event.srcElement.value);
        }
        this.conditions[index][name] = value;
    };
    RuleComponent = __decorate([
        angular2_1.Component({
            selector: 'my-rule'
        }),
        angular2_1.View({
            templateUrl: 'views/rule.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], RuleComponent);
    return RuleComponent;
})();
exports.RuleComponent = RuleComponent;
