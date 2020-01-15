import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import AddTodoModal from './components/dashboard/todo/AddTodoModal';
import EditTodoModal from './components/dashboard/todo/EditTodoModal';
import ViewModalModal from './components/dashboard/todo/ViewTodoModal';
import Navbar from './components/layout/Navbar';
import Register from './components/layout/auth/Register';
import Login from './components/layout/auth/Login';
import LandingPage from './components/pages/LandingPage';
import Dashboard from './components/dashboard/Home';
import Profile from './components/dashboard/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import NotFound from './components/pages/NotFound';

import M from 'materialize-css/dist/js/materialize.min';
import AuthState from './context/auth/AuthState';
import TodoState from './context/todo/TodoState';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Init Materialize Js
    M.AutoInit();
  });

  return (
    <AuthState>
      <TodoState>
        <Router>
          <div className="app">
            <Navbar />
            <AddTodoModal />
            <ViewModalModal />
            <EditTodoModal />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </TodoState>
    </AuthState>
  );
};

export default App;
