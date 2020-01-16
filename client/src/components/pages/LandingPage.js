import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Footer from './Footer';

const LandingPage = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);
  return (
    <Fragment>
      <section className="section center section-landing">
        <div className="container">
          <h1 className="header center">Your Tasks</h1>
          <h5 className="header col s12 light">
            Organize it all with Tasksbite
          </h5>
          <a
            href="/register"
            className="btn-large waves-effect waves-light blue"
            style={{ marginTop: '10px' }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Section: Boxes */}
      <section className="section section-boxes center">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel">
                <i className="material-icons large blue-text">face</i>
                <h4>Peace of Mind</h4>
                <p style={{ fontSize: '20px' }}>
                  Achieve peace of mind with Tasksbite
                </p>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel">
                <i className="material-icons large green-text">security</i>
                <h4>Secured</h4>
                <p style={{ fontSize: '20px' }}>
                  A task manager you can trust for life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
