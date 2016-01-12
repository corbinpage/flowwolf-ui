System.register(['../condition/condition'], function(exports_1) {
    var condition_1;
    var Rule;
    return {
        setters:[
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
        }
    }
});
//# sourceMappingURL=rule.js.map