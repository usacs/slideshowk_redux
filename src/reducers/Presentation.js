import {NEXT_SLIDE, PREV_SLIDE, SET_MAX_COUNT} from '../actions/Presentation'	

const initialState = {
	count: 0,			
	max: 10
}


const slidenav = (state = initialState, action) => {
	switch(action.type) {
		case NEXT_SLIDE:
			if(state.count + 1 >= state.max) {
				return {
					...state,
					count: max
				}
			} else {
				return {
					...state,
					count: state.count + 1
				}
			}
		case PREV_SLIDE:
			if(state.count - 1 <= 0) {
				return {
					...state,
					count: 0
				}
			} else {
				return {
					...state,
					count: state.count - 1
				}
			}
		case SET_MAX_COUNT:
			return {
				...state, 
				max: action.payload.max
			}
		default:
			return state
	}
}

export default slidenav
