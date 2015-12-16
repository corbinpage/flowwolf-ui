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

var conditionalOperators = ["AND", "OR"];
var scalarOperators = ["===", ">", "<", ">=", "<=", "!=", "is null", "is not null"];
var groupOperators = ["in", "not in"];

operators = conditionalOperators.concat(scalarOperators.concat(groupOperators));

function evalCondition(val,condition) {
	console.log("-");

	if(conditionalOperators.indexOf(condition.operator) != -1) {
		console.log("Conditional");

		var output = condition.references.map(function(c) {
			return evalCondition(val,c)
		});

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
		var expression = val + " " + condition.operator + " " + condition.value
		return eval(expression);
	} else {
		console.log("ERROR")
		return false;
	}	
}

var testCondition = {
	operator: "===",
	references: [],
	input: "score",
	value: 5
};

var testAndCondition = {
	operator: "OR",
	references: [testCondition, testCondition],
	input: null,
	value: null
};

var decision = evalCondition(5, testAndCondition);
console.log("-------")
console.log(decision)




