import React, { Component } from 'react';
// import Excellent from './Excellent'
import {Link} from 'react-router';
import '../Stylesheets/Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.actions.fetchAccounts({type: 'excellent'})
  }

  render() {
    return (
      <div className='home-wrap'>
        <div className='panel panel-default hidden-xs hidden-sm'>
          <div className='panel-body home-center'></div>
        </div>          
      </div>
    );
  }
}
export default Home;
