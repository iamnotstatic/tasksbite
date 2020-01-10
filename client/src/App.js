import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/Navbar';
import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';
import LandingPage from './components/pages/LandingPage';
import Dashboard from './components/dashboard/Home';

import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize Js
    M.AutoInit();
  });
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
