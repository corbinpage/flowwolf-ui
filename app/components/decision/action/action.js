"use strict";
var Action = (function () {
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
exports.Action = Action;
//# sourceMappingURL=action.js.map