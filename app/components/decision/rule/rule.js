"use strict";
var condition_1 = require('../condition/condition');
var action_1 = require('../action/action');
var Rule = (function () {
    function Rule() {
        var data;
        if (data) {
            this.name = data.name;
            this.order = data.order;
            this.conditions = data.conditions.map(function (c) {
                return new condition_1.Condition(c);
            });
        }
        else {
            this.id = this.id ? this.id : -1;
            this.editing = false;
        }
    }
    Rule.prototype.setData = function (data) {
        this.name = data.name;
        this.order = data.order;
        this.conditions = data.conditions.map(function (c) {
            var newCondition = new condition_1.Condition;
            newCondition.setData(c);
            return newCondition;
        });
        this.actions = data.actions.map(function (a) {
            var newAction = new action_1.Action;
            newAction.setData(a);
            return newAction;
        });
    };
    return Rule;
}());
exports.Rule = Rule;
//# sourceMappingURL=rule.js.map