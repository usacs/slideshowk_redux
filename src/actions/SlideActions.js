//SlideActions.js

//action types
export const SET_MAX = 'SET_MAX_SLIDES'
export const NEXT_SLIDE = 'GET_NEXT_SLIDE'
export const PREV_SLIDE = 'GET_PREV_SLIDE'

//state
export const initialState = {
	count: 0
}

//action creators
export const setMaxSlides = num => ({
	type: SET_MAX,
	num
})



