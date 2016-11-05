import React, { Component } from 'react';
import { changeForm } from '../Action/AppActions';
import { History } from 'react-router';
import LoadingButton from './LoadingButton.react';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }  
  }  

  mySubmit = (evt) => {
    this.props.onSubmit(this.props.username, this.props.password)
    evt.preventDefault();
  }  

  render() {
    return(
      <form className="form" onSubmit={this.mySubmit.bind(this)}>
        <div className="form__error-wrapper">
          <p className="form__error form__error--username-taken">Sorry, but this username is already taken.</p>
          <p className="form__error form__error--username-not-registered">This username does not exist.</p>
          <p className="form__error form__error--wrong-password">Wrong password.</p>
          <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
          <p className="form__error form__error--failed">Something went wrong, please try again!</p>
        </div>
        <div className="form__field-wrapper">
          <input className="form__field-input" type="text" id="username" value={this.props.username} placeholder="frank.underwood" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
          <label className="form__field-label" htmlFor="username">Username</label>
        </div>
        <div className="form__field-wrapper">
          <input className="form__field-input" id="password" type="password" value={this.props.password} placeholder="••••••••••"  />
          <label className="form__field-label" htmlFor="password">Password</label>
        </div>
        <div className="form__submit-btn-wrapper">
          {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <button className="form__submit-btn" type="submit">{this.props.btnText}</button>
          )}
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  btnText: React.PropTypes.string.isRequired 
}

export default LoginForm;
