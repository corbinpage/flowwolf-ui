System.register([], function(exports_1) {
    "use strict";
    var Action;
    return {
        setters:[],
        execute: function() {
            Action = (function () {
                function Action() {
                    var data;
                    if (data) {
                        this.id = data.id ? data.id : -1;
                        this.expression = data.expression;
                    }
                    else {
                        this.id = -1;
                        this.expression = "1 === 1";
                    }
                }
                Action.prototype.setData = function (data) {
                    this.expression = data.expression;
                };
                return Action;
            }());
            exports_1("Action", Action);
        }
    }
});
//# sourceMappingURL=action.js.map