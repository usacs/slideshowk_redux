//SlideNav.js
import { NEXT_SLIDE, PREV_SLIDE, SET_START_QUERY, SET_MAX_COUNT, CONFIRM_SETUP, MAKE_SLIDES, CLEAR } from '../actions/ActionTypes'	

const initialState = {	
	slides: [],
	current_slide: null,
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
					index: state.max - 1,
					current_slide: state.slides[state.max - 1]
				}
			} else {
				return {
					...state,
					index: state.index + 1,
					current_slide: state.slides[state.index + 1]
				}
			}
		case PREV_SLIDE:
			if(state.index - 1 <= 0) {
				return {
					...state,
					index: 0,
					current_slide: state.slides[0]
				}
			} else {
				return {
					...state,
					index: state.index - 1, 
					current_slide: state.slides[state.index - 1]
				}
			}
		case SET_MAX_COUNT:
			return {
				...state, 
				index: 0,
				max: action.max
			}
		case SET_START_QUERY:
			return {
				...state,
				start_query: action.query
			}
		case MAKE_SLIDES: 
			return {
				...state,
				slides: action.slides
			}
		case CONFIRM_SETUP:
			return {
				...state,
				index: 0,
				current_slide: state.slides[0],
				ready: true
			}
		case CLEAR:
			return initialState
		default:
			return state
		}
}

export default SlideNav
