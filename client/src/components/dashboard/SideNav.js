import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const SideNav = props => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card blue-grey white-text">
      <div className="center" style={{ transform: 'translateX(0px)' }}>
        <img src="https://imgur.com/I80W1Q0.png" alt="" width="150px" />
        <h5>{user.name}</h5>
        <p>{user.email}</p>
      </div>
      <div className="card-content white">
        <ul>
          <li className="hoverable" style={{ padding: '10px' }}>
            <Link to="/dashboard" className="black-text">
              <i className="material-icons left">dashboard</i> Dashboard
            </Link>
          </li>
          <br />
          <li className="hoverable" style={{ padding: '10px' }}>
            <Link to="/profile" className="black-text">
              <i className="material-icons left">person</i> Profile
            </Link>
          </li>
          <br />
          <li className="hoverable" style={{ padding: '10px' }}>
            <Link href="#!" className="black-text" style={{ padding: '10px' }}>
              <i className="material-icons left red-text">delete</i> Delete
              account
            </Link>
          </li>
          <br />
          <li className="hoverable" style={{ padding: '10px' }}>
            <Link to="/" className="black-text">
              <i className="material-icons left">help</i> Help & Feedback
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
