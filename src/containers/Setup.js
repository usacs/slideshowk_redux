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




	render()
	{
		
		return(
			<div>
				<h2> Get Started </h2>
				<form name="setupForm" onSubmit={this.onSubmit}>
					<div className = "text">
						<input type = "text" name="query" placeholder="Enter a &quot;Topic&quot;" onChange={this.onTextChange}/>
					</div>
					<div className = "dropdown">
						<select name = "slidecount" onChange={this.onNumChange}>
							<option value="10">10 slides</option>
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
		slidenav: state.slidenav
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		confirmSetup
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Setup)
