import {Injectable} from 'angular2/core';
import {Decision} from '../decision/decision';
import {RuleEngine} from './node-rules/index';

@Injectable()
export class RunService {
  public decision: Decision;
  public inputs: Object;
  public outputs: Object;
  public session: Object;

  constructor(decision: Decision) {
    this.decision = decision;
    this.inputs = {};
    this.outputs = {};
    this.setSession(decision.rules);
  }

  setInputs(inputs) {
    this.inputs = inputs;
  }

  setSession() {
    var thisService = this;
    var rules = this.decision.rules.map(function(r) {
      return thisService.setRule(r);
    })

    this.session = new RuleEngine(rules, { ignoreFactChanges: true });
  };

  setRule(ruleData) {
    var rule = {};
    rule['name'] = ruleData.name;
    rule['priority'] = 1000 - ruleData.order;
    // rule['condition'] = models.Condition.formatForNodeRules(ruleData.Conditions);
    // rule['condition'] = ruleData.Conditions;
    // rule['consequence'] = ruleData.Actions;
    // rule.['consequence'] = models.Action.formatForNodeRules(ruleData.Actions);

    return rule;
  }

  run() {
    console.log(this.session);
    this.session.execute(this.inputs, function(data, conditionRuns) {
      console.log("We ran!");
      console.log(data);
      console.log(conditionRuns);
    }
  }

	// getRuns() {
	// 	return Promise.resolve(MOCK_RunS);
	// }

	// getRun(id: number) {
	// 	return Promise.resolve(MOCK_RunS)
	// 		.then(decisions => decisions.filter(d => d.id === id)[0]);
	// }
}
