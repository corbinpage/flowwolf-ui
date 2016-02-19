import {Rule} from './rule/rule';

export class Decision {

	id: number;
	name: string;
	description: string;
  slug: string;
  service: string;
  inputs: Array<Object>;
  outputs: Array<Object>;
  rules: Array<Object>;

	constructor() {
    this.slug = "slug";
  }
}