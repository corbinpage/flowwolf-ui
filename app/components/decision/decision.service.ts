import {Injectable} from 'angular2/core';
import {MOCK_DECISIONS} from './mock-decisions';

@Injectable()
export class DecisionService {
	getDecisions() {
		return Promise.resolve(MOCK_DECISIONS);
	}

	getDecision(id: number) {
		return Promise.resolve(MOCK_DECISIONS)
			.then(decisions => decisions.filter(d => d.id === id)[0]);
	}
}
