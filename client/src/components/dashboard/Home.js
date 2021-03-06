import React, { useEffect, useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import Todos from './todo/Todos';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, loading, user } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <section className="section section-posts grey lighten-4">
        <div className="row">
          <div className="col m3 s12">
            <div className="card blue-grey white-text">
              <div className="center" style={{ transform: 'translateX(0px)' }}>
                {user.avatar === null ? (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWfx4vUs5AeXRQ40sB6M6vqQMwndd3W9lsgaLDhf-hZ5DORdsVA&s"
                    alt="profile"
                    width="150px"
                    className="circle responsive-img"
                    style={{ marginTop: '15px' }}
                  />
                ) : (
                  <img
                    src={`api/users/${user._id}/avatar`}
                    alt=""
                    width="150px"
                    className="circle responsive-img"
                    style={{ marginTop: '15px' }}
                  />
                )}

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
                    <Link to="/" className="black-text">
                      <i className="material-icons left">help</i> Help &
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            <Todos />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
