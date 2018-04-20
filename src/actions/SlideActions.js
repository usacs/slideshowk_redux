//SlideActions.js
import { NEXT_SLIDE, PREV_SLIDE, SET_START_QUERY, SET_MAX_COUNT, 
MAKE_SLIDES, CONFIRM_SETUP } from '../actions/ActionTypes'
import {getNextText, getNextImage } from './TextSource.js'

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

const makeSlides = (query, num) => {
	let slides = []

	slides.push({
		text: query + ':&#13;&#10;A Presentation',
		image: query
	})

		let t = getNextText(query)
		let q = getNextImage(query)
		
		//console.log('t ' + t)
		
		//console.log('q ' + q)
	
	for(let i = 1; i < num; i++) {
		slides.push({
			text: t, 
			image: q
		})
		t = getNextText(t)
		//console.log(t)
		q = getNextImage(q)
	}
	return {
		type: MAKE_SLIDES, 
		slides: slides
	}

}

export const confirmSetup = (num, query) => {
	return (dispatch) => {
		dispatch(setQuery(query))
		dispatch(setMaxCount(num))
		dispatch(makeSlides(query, num))
		dispatch({
			type: CONFIRM_SETUP
		})
	}
}
