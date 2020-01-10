import React, { Fragment } from 'react';

const LandingPage = () => {
  return (
    <Fragment>
      <section className="section center section-landing">
        <div className="container">
          <h1 className="header center ">Starter Template</h1>
          <h5 className="header col s12 light">
            A modern responsive front-end framework based on Material Design
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
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large purple-text">room</i>
                <h4>Pick Where</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, harum?
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large blue-text">room</i>
                <h4>Pick Where</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, harum?
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large green-text">room</i>
                <h4>Pick Where</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, harum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-footer   light-blue accent-2 center white-text">
        <p>&copy; 2020</p>
      </div>
    </Fragment>
  );
};

export default LandingPage;
