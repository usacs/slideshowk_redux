//Slide.jsx
import React from 'react';

class Slide extends React.Component
{

    constructor(props)
    {
        super(props);

    }
	
	
    render()
    {
		
        return(
				<div>
					<div className = "SlideContainer fade">
						<img src = {this.props.imageurl} alt = "image goes here"/>
						<text>{this.props.text}</text>
					</div>
					<text>{this.props.author}</text>
				</div>
              );
    }
}




export {Slide as default};
