/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ScheduleList from '../containers/scheduleList';
import NotFoundPage from './pages/NotFoundPage';
import Login from '../containers/forms/Login';
import OidcLogin from './OidcLogin';
import OidcCallback from './OidcCallback';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    // const activeStyle = { color: 'blue' };
    return (
      <div>
        <Switch>
          <Route exact path="/" component={OidcLogin} />
          <Route exact path="/callback" component={OidcCallback} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/schedule" component={ScheduleList} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
