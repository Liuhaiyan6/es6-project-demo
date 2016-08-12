import Mainbody from './edit.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('../styles/edit.css');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Mainbody}/>
  </Router>
), document.getElementById('mainbody'));

if (module.hot) {
  module.hot.accept();
}
