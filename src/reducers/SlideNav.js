//SlideNav.js
import { NEXT_SLIDE, PREV_SLIDE, SET_START_QUERY, SET_MAX_COUNT, CONFIRM_SETUP } from '../actions/ActionTypes'	

const initialState = {	
	start_query: '',
	index: 0,			
	max: 10,
	ready: false
}


const SlideNav = (state = initialState, action) => {
	switch(action.type) {
		case NEXT_SLIDE:
			if(state.index + 1 >= state.max) {
				return {
					...state,
					index: state.max
				}
			} else {
				return {
					...state,
					index: state.index + 1
				}
			}
		case PREV_SLIDE:
			if(state.index - 1 <= 0) {
				return {
					...state,
					index: 0
				}
			} else {
				return {
					...state,
					index: state.index - 1
				}
			}
		case SET_MAX_COUNT:
			return {
				...state, 
				max: action.max
			}
		case SET_START_QUERY:
			return {
				...state,
				start_query: action.query
			}
		case CONFIRM_SETUP:
			return {
				...state,
				ready: true
			}
		default:
			return state
		}
}

export default SlideNav
