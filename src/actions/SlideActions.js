//SlideActions.js
import { NEXT_SLIDE, PREV_SLIDE, SET_START_QUERY, SET_MAX_COUNT, MAKE_SLIDES } from '../actions/ActionTypes'


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

export const setMaxCount = (num) => {
	return (dispatch) => dispatch({
		type: SET_MAX_COUNT,
		max: num
	})
}

export const setQuery = (query) => {
	return (dispatch) => dispatch({
		type: SET_START_QUERY,
		query: query
	})
}
