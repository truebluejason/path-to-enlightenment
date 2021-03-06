import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import LandingPage from './landing/Landing';
import SignUpPage from './login/SignUp';
import SignInPage from './login/SignIn';
import HomePage from './home/Home';
import AccountPage from './account/Account';
import PasswordForgetPage from './login/PasswordForget';
import InstructionsPage from './instructions/Instructions';
import DiagnosticsPage from './diagnostics/Diagnostics';
import AntidotesPage from './antidotes/Antidotes';
import OverviewPage from './overview/Overview';
import withAuthentication from './higherorder/withAuthentication';
import * as routes from '../constants/routes';
import './App.css';

const App = () =>
  <Router>
    <div className='containerDiv'>
      <Navigation />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.INSTRUCTIONS} component={() => <InstructionsPage />} />
      <Route path={routes.DIAGNOSTICS} component={() => <DiagnosticsPage />} />
      <Route path={routes.ANTIDOTES} component={() => <AntidotesPage />} />
      <Route exact path={routes.OVERVIEW} component={() => <OverviewPage />} />
    </div>
  </Router>

export default withAuthentication(App);
