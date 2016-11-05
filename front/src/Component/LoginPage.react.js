import React, { Component} from 'react';
import { connect } from 'react-redux';
import Form from './Form.react';
import auth from '../Utils/auth';
import { login } from '../Action/AppActions';
import LoadingIndicator from './LoadingIndicator.react';

export default class LoginPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = { }
	}

	_login(username, password) {
		console.log(username + ", " + password)
		login(username, password);
	}

	render() {		
	    return (
				<div className="form-page__wrapper">
					<div className="form-page__form-wrapper">
						<div className="form-page__form-header">
							<h2 className="form-page__form-heading">Login</h2>
						</div>
						{/* While the form is sending, show the loading indicator,
							otherwise show "Log in" on the submit button */}
			    	<Form history={this.props.history} onSubmit={ () => this._login() } btnText={"Login"} />
					</div>
				</div>
			);
	  }
}