import React, { useState, useContext, useEffect } from 'react';
import SideNav from './SideNav';
import Spinner from '../layout/Spinner';
import AuthContext from '../../context/auth/authContext';

import M from 'materialize-css/dist/js/materialize.min';

const Profile = () => {
  const [profile, updateUser] = useState({
    name: '',
    email: '',
    avatar: '',
    password: ''
  });
  const authContext = useContext(AuthContext);
  const { loadUser, loading, user, updateProfile } = authContext;
  const { name, email, avatar, password } = profile;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onChange = e =>
    updateUser({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '') {
      M.toast({ html: 'Email or name is same' });
    } else {
      updateProfile({
        name,
        email
      });
      M.toast({ html: 'Profile updated successfully' });
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="section section-profile">
      <div className="valign-wrapper row login-box">
        <div className="container">
          <div className="col s12 m4">
            <SideNav />
          </div>
          <div className="col card s12 m7">
            <form onSubmit={onSubmit} encType="multipart/form-data">
              <div className="card-content">
                <span className="card-title center">Profile</span>
                <div className="row">
                  <div className="file-field input-field">
                    <div className="btn blue">
                      <span>Upload Image</span>
                      <input
                        type="file"
                        name="avatar"
                        value={avatar}
                        onChange={onChange}
                      />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="text"
                      className="validate"
                      name="name"
                      value={name || user.name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="email"
                      className="validate"
                      name="email"
                      value={email || user.email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="input-field col s12">
                    <label htmlFor="password">Password </label>
                    <input
                      type="password"
                      className="validate"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="card-action right-align center text-white">
                  <button
                    className="btn blue waves-effect waves-light"
                    type="submit"
                  >
                    Update <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
