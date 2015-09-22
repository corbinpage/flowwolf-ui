// GET
// POST
// /decision/a8D9XQ
// /decision/a8D9XQ/condition/b4D4zQ
// /decision/a8D9XQ/input
// /decision/a8D9XQ/output
// operator: "AND", "OR", "=", ">", "<"
// references: {conditions}
// input: score
// value: 1

var json = require("JSON");

var conditionalOperators = ["AND", "OR"];
var scalarOperators = ["=", ">", "<", ">=", "<=", "!=", "is null", "is not null"];
var groupOperators = ["in", "not in"];

operators = conditionalOperators.concat(scalarOperators.concat(groupOperators));

function evalCondition(condition) {
	console.log("Eval");

	if(conditionalOperators.indexOf(condition.operator) != -1) {
		console.log("Conditional");

		var output = condition.references.map(evalCondition);

		if(condition.operator === "AND") {
			return output.indexOf(false) === -1
		} else if(condition.operator === "OR") {
			return output.indexOf(true) != -1
		} else {
			return false;
		}

	} else if (groupOperators.indexOf(condition.operator) != -1) {
		console.log("Group");
	} else if (scalarOperators.indexOf(condition.operator) != -1) {
		console.log("Scalar");
		return eval("1 != 1");
	} else {
		console.log("ERROR")
		return false;
	}	

	console.log("---------");
}

var testCondition = {
	operator: "=",
	references: [],
	input: "score",
	value: 1
};

var testAndCondition = {
	operator: "OR",
	references: [testCondition, testCondition],
	input: null,
	value: null
};

var decision = evalCondition(testAndCondition);
console.log("-------")
console.log(decision)




