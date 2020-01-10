import React from 'react';
import Todo from './todo/Todo';

const Home = () => {
  return (
    <section class="section section-posts grey lighten-4">
      <div class="row">
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
                    <i class="material-icons left">dashboard</i> Dashboard
                  </a>
                </li>
                <hr />
                <li>
                  <a href="index.html" className="black-text">
                    <i class="material-icons left">person</i> Profile
                  </a>
                </li>
                <hr />
                <li>
                  <a href="index.html" className="black-text">
                    <i class="material-icons left">help</i> Help & Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col s12 m8">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Categories</span>
              <Todo />
            </div>
            <div className="card-action">
              <ul className="pagination">
                <li className="disabled">
                  <a href="#!" className="blue-text">
                    <i className="material-icons">chevron_left</i>
                  </a>
                </li>
                <li class="active blue lighten-2">
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
                <li class="waves-effect">
                  <a href="#!" className="blue-text">
                    4
                  </a>
                </li>
                <li class="waves-effect">
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
  );
};

export default Home;
