import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../App';
import Home from '../Component/Home';
// import Topics from '../Component/Topics';
// import Topic from '../Component/Topic';
// import Jobs from '../Component/Jobs';
// import Remote from '../Component/Remote';
// import Programmer from '../Component/Programmer';
// import NewTopic from '../Component/NewTopic';


const RouteConfig = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default RouteConfig;
