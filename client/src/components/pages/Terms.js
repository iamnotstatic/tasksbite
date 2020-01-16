import React, { Fragment, useContext, useEffect } from 'react';
import Footer from './Footer';
import Spinner from '../layout/Spinner';
import AuthContext from '../../context/auth/authContext';
const Terms = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  if (authContext.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="section section-terms">
        <div className="container">
          <div className="card-panel">
            <h4>Tasksbite Terms of Service</h4>
            <br />
            <h5>
              <b>Thanks for Choosing Tasksbite!</b>{' '}
            </h5>
            <p className="flow-text">
              Thanks for choosing Tasksbite! Tasksbite Service is provided by
              Tasksbite. By using our Service, you are agreeing to these Terms
              of Service Terms and certify that you are over the age of 13. If
              you are using the Service on behalf of an organization or entity
              Organization, then you are agreeing to these Terms on behalf of
              the Organization. In that case, “you” and “your” may refer to the
              Organization. Please read these terms carefully before start using
              our Service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Terms;
