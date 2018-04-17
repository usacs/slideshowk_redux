import React from 'react';
import { connect } from 'react-redux'


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
	}


	nextSlide = () => {
		this.props.dispatch({type: 'INCREMENT'});	
	}

	prevSlide = () => {
		this.props.dispatch({type: 'DECREMENT'});	
	}

	render() {
		return (
			<div>
				<span>{this.props.count}</span>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		count: state.count
	};
}

export default connect(mapStateToProps) (Presentation)
