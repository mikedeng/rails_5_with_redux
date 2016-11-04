import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import classname from 'classnames';
import {Link} from 'react-router';
import '../Stylesheets/Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      accounts: false,
      bags: false
    }
  }

  componentDidMount() {
    this.handleClick(this.props.path)
  }

  toggleDropdown() {
    this.setState({ hide: ! this.state.hide })
  }

  handleClick = (name) => {
    switch (name) {
      case "/accounts":
        this.setState({ accounts: true, bags: false })
        break
      case "/bags":
        this.setState({ accounts: false, bags: true })
        break      
      default:
        this.setState({ accounts: false, bags: false })
    }
  }

  render() {
    return (
      <div className='header'>
        <nav className="navbar navbar-default navbar-fixed-sm" role="navigation">
          <div className="container">
            <div className="navbar-header" id='navbar-header'>
              <button type="button" onClick={()=>this.toggleDropdown()} className="bs-navbar-collapse navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' activeClassName="navbar-brand" onClick={() => this.handleClick('/')}>
                <b className='text-danger'>Ruby</b> China
              </Link>
            </div>

            <div className={classname("navbar-collapse", { hide: this.state.hide })} id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={classname({active: this.state.accounts})}>
                 <Link to="/accounts" onClick={() => this.handleClick('/accounts')}>社区</Link>
                </li>                
              </ul>
              <DropdownMenu onClick={this.handleClick.bind(this)}></DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
