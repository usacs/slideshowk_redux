//SlideActions.js
import { NEXT_SLIDE, PREV_SLIDE, SET_START_QUERY, SET_MAX_COUNT, CONFIRM_SETUP } from '../actions/ActionTypes'


export const nextSlide = () => {
	return (dispatch) => dispatch({
		type: NEXT_SLIDE
	})
}

export const prevSlide = () => {
	return (dispatch) => dispatch({
		type: PREV_SLIDE
	})
}

const setMaxCount = (num) => {
	return {
		type: SET_MAX_COUNT,
		max: num
	}
}

const setQuery = (query) => {
	return {
		type: SET_START_QUERY,
		query: query
	}
}

export const confirmSetup = (num, query) => {
	return (dispatch) => {
		dispatch(setQuery(query))
		dispatch(setMaxCount(num))
		dispatch({
			type: CONFIRM_SETUP
		})
	}
}
