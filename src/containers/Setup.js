//Setup.jsx
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { confirmSetup } from '../actions/SlideActions'

class Setup extends React.Component
{
	componentDidMount() {
		this.onSubmit = this.onSubmit.bind(this)
		this.validate = this.validate.bind(this)
	}

	onSubmit = (e) => {	
		e.preventDefault()
		if(this.validate() === true) {
			var q = document.forms["setupForm"]["query"].value
			var c = document.forms["setupForm"]["slidecount"].value

			this.props.confirmSetup(c, q)
		}
	}

	validate = () => {
		var q = document.forms["setupForm"]["query"].value

		if(q === "") {
			alert("You gotta enter a starting topic! ...dingus.")
			return false
		}
		return true
	}

	styleDropdown = () => {
	
		var customSelects = document.querySelectorAll(".dropdown_set");
		for(var i=0; i<customSelects.length; i++) {
			if (customSelects[i].hasAttribute("disabled")) {
					console.log('styling')
					customSelects[i].parentNode.className += " dropdown_disabled";
			}
		}	
		
	
	}




	render()
	{
		this.styleDropdown()

		return(
			
			<div className = "setupForm">
				<h2> Get Started </h2>
				<form name="setupForm" onSubmit={this.onSubmit}>
					<div className = "text">
						<input type = "text" name="query" placeholder="Enter a &quot;Topic&quot;"/>
					</div>
					<div className = "select">
						<span className ="dropdown dropdown_set"/>
						<select className = "dropdown_select dropdown_select_set" name = "slidecount">
							<option value="10">10 Slides</option>
							<option value = "15">15 slides</option>
							<option value = "20">20 slides</option>
						</select>
					</div>
					<div className = "submission">
						<input type = "submit" value = "Get Started"/>
					</div> 
				</form>
			</div>
		)						
	}
}

function mapStateToProps(state) {
	return { 
		slidenav: state.slidenav,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		confirmSetup
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Setup)
