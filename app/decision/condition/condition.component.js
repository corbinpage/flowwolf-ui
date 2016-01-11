System.register([], function(exports_1) {
    var Condition;
    return {
        setters:[],
        execute: function() {
            Condition = (function () {
                function Condition() {
                    this.id = -1;
                    this.input = "State";
                    this.operator = '=';
                    this.values = "NC";
                }
                return Condition;
            })();
            exports_1("Condition", Condition);
        }
    }
});
//# sourceMappingURL=condition.component.js.map