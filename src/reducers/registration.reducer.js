import { ADD_EMPLOYEE } from '../actions/index';
export function registration(state = [], action) {

	switch (action.type) {
		case ADD_EMPLOYEE:
			return [
				...state,
				Object.assign({}, action.payload)
			  ];
		default:
			return state;
	}
}