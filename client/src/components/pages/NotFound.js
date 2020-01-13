import React, { useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import AuthContext from '../../context/auth/authContext';

const NotFound = () => {
  const authContext = useContext(AuthContext);
  const { loading, isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="valign-wrapper row">
      <div className="col card s10 pull-s1 m6 pull-m3 l4 pull-l4">
        <div className="card-content center">
          <h1
            style={{ marginBottom: '0', fontWeight: 'bolder' }}
            className="blue-text"
          >
            404
          </h1>
          <p
            className="flow-text"
            style={{ marginTop: '5px', marginBottom: '20px' }}
          >
            Page not Found
          </p>
          {isAuthenticated ? (
            <a href="/dashboard" className="btn blue">
              Back to Dashboard
            </a>
          ) : (
            <a href="/" className="btn blue">
              Back to home
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
