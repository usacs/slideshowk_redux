//Presentation.jsx
import React from 'react'
import { connect } from 'react-redux'
//Slides
//import Slide from '../Slides/Slide.jsx'

class Presentation extends React.Component
{

	constructor(props)
	{
		super(props);
	}

	componentDidMount() 
	{
		this.handleKeyDown = this.handleKeyDown.bind(this)
        window.addEventListener("keydown", this.handleKeyDown)
    }

	componentWillUnmount() 
	{
        window.removeEventListener("keydown", this.handleKeyDown)
    }

	componentDidUpdate()
	{
		console.log(this.state)
	}

	handleKeyDown(e)
	{
		//console.log(e.key);
		if(e.key === 'ArrowLeft')
		{
			e.preventDefault()
			this.increment()
		}
		if(e.key === 'ArrowRight')
		{
			e.preventDefault()
			this.decrement()
		}
	}

	increment()
	{
		this.props.dispatch({type: 'NEXT_SLIDE'})
	}
	
	decrement()
	{
		this.props.dispatch({type: 'PREV_SLIDE'})
	}


    render()
    {

		return(
			
			<div>
				{this.props.index}
			</div>)
    }

}


function mapStateToProps(state) {
	return {
		count: state.count
	}
}

export default connect(mapStateToProps)(Presentation)

