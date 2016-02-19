System.register([], function(exports_1) {
    "use strict";
    var Condition;
    return {
        setters:[],
        execute: function() {
            Condition = (function () {
                function Condition() {
                    var data;
                    if (data) {
                        this.id = data.id ? data.id : -1;
                        this.expression = data.expression;
                    }
                    else {
                        this.id = -1;
                    }
                }
                Condition.prototype.setData = function (data) {
                    this.expression = data.expression;
                };
                return Condition;
            }());
            exports_1("Condition", Condition);
        }
    }
});
//# sourceMappingURL=condition.js.map