//Presentation.
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { prevSlide, nextSlide } from '../actions/SlideActions'
import getImage from '../actions/ImageSource'
import Slide from '../components/Slide'


class Presentation extends React.Component {
	
	componentDidMount() {

		this.props.getImage(this.props.slidenav.current_slide.image)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		window.addEventListener("keydown", this.handleKeyDown)
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown)
	}

	handleKeyDown(e) {
		if(e.key === 'ArrowRight') {
			e.preventDefault()
			this.props.nextSlide()

			this.props.getImage(this.props.slidenav.current_slide.image)
		}


		if(e.key === 'ArrowLeft') {
			e.preventDefault()
			this.props.prevSlide()


			this.props.getImage(this.props.slidenav.current_slide.image)
		}
	}

	

	render() {

		return (
			<div>	
					<Slide 
						text = {this.props.slidenav.current_slide.text}
					/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		slidenav: state.slidenav,
		slidemaker: state.slidemaker
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		prevSlide,
		nextSlide,
		getImage
	}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) (Presentation)
