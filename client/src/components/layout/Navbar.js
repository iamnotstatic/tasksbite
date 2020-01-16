import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title }, props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-close">
        <Link to="#!" style={{ textTransform: 'uppercase' }}>
          <i className="material-icons left">face</i> <b>{user && user.name}</b>
        </Link>
      </li>
      <li className="nav-close">
        <a
          href="/login"
          onClick={onLogout}
          style={{ textTransform: 'uppercase' }}
        >
          <i className="material-icons left">input</i>
          <b>
            <span className="hide-sm">Logout</span>
          </b>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-close">
        <a href="/register">
          <b> Register</b>
        </a>
      </li>
      <li className="nav-close">
        <a href="/login">
          <b>Login</b>
        </a>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="blue z-depth-0">
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              <b>{title}</b>
            </Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <h5 className="blue-text center">
          <b>{title}</b>
        </h5>
        <hr />
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </Fragment>
  );
};

Navbar.protoTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Tasksbite'
};
export default Navbar;
