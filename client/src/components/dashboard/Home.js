import React, { useEffect, useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import Todo from './todo/Todo';
import Spinner from '../layout/Spinner';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, loading } = authContext;

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
                <img src="https://imgur.com/I80W1Q0.png" alt="" width="150px" />
                <h5>Chris</h5>
                <p>chris@gmail.com</p>
              </div>
              <div className="card-content white">
                <ul>
                  <li>
                    <a href="index.html" className="black-text">
                      <i className="material-icons left">dashboard</i> Dashboard
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="/profile" className="black-text">
                      <i className="material-icons left">person</i> Profile
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="index.html" className="black-text">
                      <i className="material-icons left">help</i> Help &
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            <div className="row">
              <div className="col s12 m6 l4">
                <div className="card-panel blue lighten-1 white-text center">
                  <i className="material-icons medium">insert_emoticon</i>
                  <h5>Total Todos</h5>
                  <h3 className="count">28300</h3>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card-panel green lighten-1 white-text center">
                  <i className="material-icons medium">check_circle</i>
                  <h5>Completed</h5>
                  <h3 className="count">28300</h3>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card-panel red lighten-1 white-text center">
                  <i className="material-icons medium">close</i>
                  <h5>Pending</h5>
                  <h3 className="count">28300</h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <span className="card-title center">TodoList</span>
                <Todo />
              </div>
              <div className="card-action">
                <ul className="pagination">
                  <li className="disabled">
                    <a href="#!" className="blue-text">
                      <i className="material-icons">chevron_left</i>
                    </a>
                  </li>
                  <li className="active blue lighten-2">
                    <a href="#!" className="white-text">
                      1
                    </a>
                  </li>
                  <li className="waves-effect">
                    <a href="#!" className="blue-text">
                      2
                    </a>
                  </li>
                  <li className="waves-effect">
                    <a href="#!" className="blue-text">
                      3
                    </a>
                  </li>
                  <li className="waves-effect">
                    <a href="#!" className="blue-text">
                      4
                    </a>
                  </li>
                  <li className="waves-effect">
                    <a href="#!" className="blue-text">
                      5
                    </a>
                  </li>
                  <li className="waves-effect">
                    <a href="#!" className="blue-text">
                      <i className="material-icons">chevron_right</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
