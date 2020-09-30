import { ADD_STUDENT } from '../actions/index';
export function registration(state = [], action) {

	switch (action.type) {
		case ADD_STUDENT:
			return [
				...state,
				Object.assign({}, action.payload)
			  ];
		default:
			return state;
	}
}