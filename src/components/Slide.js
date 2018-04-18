//Slide.jsx
import React from 'react';

class Slide extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state =
        {	
			img: props.img,
            txt: props.txt,
        };

    }
	
	
    render()
    {
		
        return(
				<div className = "SlideContainer fade">
					<img src = {this.props.image} alt = "image goes here"/>
					<text>{this.props.text}</text>
				</div>
              );
    }
}




export {Slide as default};
