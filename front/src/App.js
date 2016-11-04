import React, { Component, PropTypes, cloneElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './Action'
import Navbar from './Component/Navbar';
// import Promote from './Component/Promote';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }
  render() {
    let layout = ''
    const childrenWithProps = React.Children.map(this.props.children,
        (child) => cloneElement(child, {
          actions: this.props.actions,
          results: this.props.results
        })
        )

    let pathname = this.props.location.pathname

    if (pathname === '/programmer' || pathname === '/'){
      layout = <div className='container'>
                {childrenWithProps}
               </div>
    } else if (pathname === '/accounts/new'){
      layout = <div>
                {childrenWithProps}
               </div>
    } else {
      layout = <div className='container'>
                <div className='row margin-xs'>
                  <div className='col-md-9 no-padding-xs'>
                    {childrenWithProps}
                  </div>
                  <div className='col-md-3 no-padding-xs'>
                    // <Promote />
                  </div>
                </div>
               </div>
    }
    return (
      <div>
        <Navbar path={this.props.location.pathname}/>
        { layout }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = state => {
  const { postsByReddit } = state
  let accounts = [], results = postsByReddit['results']
  if (results) {
    switch (results.type) {      
      case actions.ACCOUNTS:
        accounts = results.accounts
        break
      default:
        {}
    }
  }
  return {
    results: {      
      accounts      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
