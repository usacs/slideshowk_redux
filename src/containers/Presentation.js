import React from 'react';
import { connect } from 'react-redux'
import { NEXT_SLIDE, PREV_SLIDE } from '../actions/ActionTypes'
import { getImage } from '../actions/ImageSource'

class Presentation extends React.Component {
	
	
	componentDidMount() {
		this.handleKeyDown = this.handleKeyDown.bind(this)
		window.addEventListener("keydown", this.handleKeyDown)
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown)
	}

	handleKeyDown(e) {
		if(e.key === 'ArrowRight') {
			e.preventDefault()
			this.nextSlide()
		}


		if(e.key === 'ArrowLeft') {
			e.preventDefault()
			this.prevSlide()
		}

		if(e.key === 'ArrowUp') {
			e.preventDefault()
			this.props.getImage()
		}
	}


	nextSlide = () => {
		//this.props.dispatch({type: NEXT_SLIDE});	
	}

	prevSlide = () => {
		//this.props.dispatch({type: PREV_SLIDE});
	}

	render() {
		return (
			<div>
				<span>{this.props.slidenav.index}</span>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		slidenav: state.slidenav,
		imageurl: state.slidemaker.imageurl
	};
}

export default connect(mapStateToProps, { getImage }) (Presentation)
