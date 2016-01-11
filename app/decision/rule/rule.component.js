System.register(['angular2/core', './condition'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, condition_1;
    var Rule, RuleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (condition_1_1) {
                condition_1 = condition_1_1;
            }],
        execute: function() {
            Rule = (function () {
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
            exports_1("Rule", Rule);
            //TypeScript
            RuleComponent = (function () {
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
                RuleComponent.prototype.addOutput = function () {
                    this.rule.outputs.push({ output: "", value: "" });
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
                    core_1.Component({
                        selector: 'my-rule'
                    }),
                    View({
                        templateUrl: 'components/rule/rule.html',
                        directives: [NgFor, NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RuleComponent);
                return RuleComponent;
            })();
            exports_1("RuleComponent", RuleComponent);
        }
    }
});
//# sourceMappingURL=rule.component.js.map