import React, { Fragment, useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: [e.target.value] });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      let Msg = '<span class="red-text">All fields are required</span>';
      M.toast({ html: Msg });
    } else if (password[0] !== password2[0]) {
      let pwdMatch = '<span class="red-text">Passwords do not match</span>';
      M.toast({ html: pwdMatch });
    } else {
      console.log('Passed');
    }
  };

  return (
    <Fragment>
      <div className="valign-wrapper row login-box">
        <div className="col card s10 pull-s1 m6 pull-m3 l4 pull-l4">
          <form onSubmit={onSubmit}>
            <div className="card-content">
              <span className="card-title center">Register</span>
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="email">Name</label>
                  <input
                    type="text"
                    className="validate"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="validate"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password">Password </label>
                  <input
                    type="password"
                    className="validate"
                    name="password"
                    value={password}
                    minLength="7"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password2">Comfirm Password </label>
                  <input
                    type="password"
                    className="validate"
                    name="password2"
                    value={password2}
                    minLength="7"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="card-action right-align center text-white">
                <button
                  className="btn blue waves-effect waves-light"
                  type="submit"
                >
                  Register <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
