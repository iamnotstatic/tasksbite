import React from 'react';

const Profile = () => {
  return (
    <section className="section section-profile">
      <div className="valign-wrapper row login-box">
        <div className="container">
          <div className="col s12 m3">hello</div>
          <div className="col card s12 m8">
            <form>
              <div className="card-content">
                <span className="card-title center">Profile</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="email">Name</label>
                    <input type="text" className="validate" name="name" />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="validate" name="email" />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="password">Password </label>
                    <input
                      type="password"
                      className="validate"
                      name="password"
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
