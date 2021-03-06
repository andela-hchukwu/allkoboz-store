import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'
import HomePage from './components/HomePage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/index';

import requireAuthentication from './utils/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="dashboard" component={requireAuthentication(Dashboard)} />
  </Route>
)
