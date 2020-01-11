import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title }, props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="blue z-depth-0">
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              {title}
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </Fragment>
  );
};

Navbar.protoTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Todo Keeper'
};
export default Navbar;
