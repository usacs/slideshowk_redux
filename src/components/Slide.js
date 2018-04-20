//Slide.jsx
import React from 'react'


class Slide extends React.Component
{
	
    
	
	
    render()
    {
		
		
        return(
				<div>
					<div className = "SlideContainer fade">
						<img src = {this.props.image} alt = "image goes here"/>
						{this.props.text}					
					</div>
					{this.props.author}
				</div>
              );
    }
}




export {Slide as default};
