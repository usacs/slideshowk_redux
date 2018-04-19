import { NEXT_SLIDE, PREV_SLIDE } from '../actions/ActionTypes'


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

