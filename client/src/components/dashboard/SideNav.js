import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

import M from 'materialize-css/dist/js/materialize.min';

const SideNav = props => {
  const authContext = useContext(AuthContext);
  const { loadUser, user, deleteAccount, clearErrors } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onDelete = () => {
    if (
      window.confirm(
        `${user.name} are sure you want to Delete your account Permanently`
      )
    ) {
      deleteAccount();
      M.toast({ html: 'Account Deleted successfully' });
    }
    clearErrors();
  };

  return (
    <div className="card blue-grey white-text">
      <div className="center" style={{ transform: 'translateX(0px)' }}>
        <img
          src={`api/users/${user._id}/avatar`}
          alt=""
          width="150px"
          className="circle responsive-img"
          style={{ marginTop: '15px' }}
        />
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
            <Link
              to="#!"
              className="black-text"
              style={{ padding: '10px' }}
              onClick={onDelete}
            >
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
