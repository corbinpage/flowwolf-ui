System.register(['../condition/condition', '../action/action'], function(exports_1) {
    "use strict";
    var condition_1, action_1;
    var Rule;
    return {
        setters:[
            function (condition_1_1) {
                condition_1 = condition_1_1;
            },
            function (action_1_1) {
                action_1 = action_1_1;
            }],
        execute: function() {
            Rule = (function () {
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
            exports_1("Rule", Rule);
        }
    }
});
//# sourceMappingURL=rule.js.map