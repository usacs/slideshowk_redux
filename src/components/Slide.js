//Slide.jsx
import React from 'react'


class Slide extends React.Component
{
	
    
	componentWillMount() {
		
	}
	
    render()
    {
		
		
        return(
				<div>
					<div className = "SlideContainer">
						<img className = "fade" src = {this.props.image} alt = "image goes here"/>
						<div className = "SlideText">
							{this.props.text}			
						</div>
					</div>
					{this.props.author}
				</div>
              );
    }
}




export {Slide as default};
