import {Inject} from 'angular2/core';
import {Rule} from './rule/rule';

export class Decision {

	id: number;
	name: string;
	description: string;
  slug: string;
  service: string;
  inputs: Array<Object>;
  outputs: Array<Object>;
  rules: Array<Rule>;

  constructor(@Inject(Object) data: Object) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.slug = data.slug;
      this.service = data.service;
      this.inputs = data.inputs;
      this.outputs = data.outputs;

      if (data.rules) {
        this.rules = data.rules.map(function(ruleData) {
          var newRule = new Rule();
          newRule.setData(ruleData);
          return newRule;
        });
      }

    }
  }
}