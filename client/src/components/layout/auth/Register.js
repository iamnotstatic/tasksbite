import React, { Fragment } from 'react';

const Register = () => {
  return (
    <Fragment>
      <div className="valign-wrapper row login-box">
        <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
          <form>
            <div className="card-content">
              <span className="card-title center">Register</span>
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="email">Name</label>
                  <input
                    type="text"
                    className="validate"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="validate"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password">Password </label>
                  <input
                    type="password"
                    className="validate"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <div className="card-action right-align center text-white">
                <input
                  type="submit"
                  className="btn btn-medium blue waves-effect waves-light"
                  value="Register"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
