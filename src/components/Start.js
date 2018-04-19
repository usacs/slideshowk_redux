//Start.js
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMaxCount, setQuery, confirmSetup } from '../actions/SlideActions'
import Setup from '../components/Setup.jsx'
import Presentation from "./Presentation.jsx"

class Start extends Component
{
	componentDidMount() {
	}

	
	constructor(props)
	{
		super(props);
		this.state = 
		{
			isSetup: false,
			startquery: '',
			slidecount: 10,
			slides: []
		};
		this.onSetup = this.onSetup.bind(this);
	}

	onSetup = (data) =>
	{
		this.setState({
						isSetup: true,
						startquery: data.startquery,
						slidecount: data.slidecount,
						slides: data.slides
					  });
	}

	componentDidUpdate()
	{
		//console.log(this.state);
	}

	render()
	{
		const {isSetup, slides, ...others} = this.state;
		
		
		let content = null;
		if(isSetup)
		{
			content = <Presentation slides = {slides} {...others}/>;
		}
		else
		{
			content = <Setup 
					onSetup = {this.onSetup}
					isSetup = {isSetup}
					slides = {slides}
					{...others} />;
		}

		return(
			<div>
				{content}
			</div>
		);
	}

}


export default Start
