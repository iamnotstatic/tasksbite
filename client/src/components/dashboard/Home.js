import React from 'react';

const Home = () => {
  return (
    <section class="section section-posts grey lighten-4">
      <div class="row">
        <div className="col m3 s12">
          <div className="card  blue-grey">
            <div className="card-content">
              <div className="center">
                <img src="https://imgur.com/I80W1Q0.png" alt="" width="150px" />
              </div>
            </div>
          </div>
        </div>
        <div class="col s12 m8">
          <div class="card">
            <div class="card-content">
              <span class="card-title">Categories</span>
              <table class="striped responsive-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Web Development</td>
                    <td>Jan 1, 2018</td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Graphic Design</td>
                    <td>Jan 2, 2018</td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Tech Gadgets</td>
                    <td>Jan 3, 2018</td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Other</td>
                    <td>Jan 5, 2018</td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-action">
              <ul class="pagination">
                <li class="disabled">
                  <a href="#!" class="blue-text">
                    <i class="material-icons">chevron_left</i>
                  </a>
                </li>
                <li class="active blue lighten-2">
                  <a href="#!" class="white-text">
                    1
                  </a>
                </li>
                <li class="waves-effect">
                  <a href="#!" class="blue-text">
                    2
                  </a>
                </li>
                <li class="waves-effect">
                  <a href="#!" class="blue-text">
                    3
                  </a>
                </li>
                <li class="waves-effect">
                  <a href="#!" class="blue-text">
                    4
                  </a>
                </li>
                <li class="waves-effect">
                  <a href="#!" class="blue-text">
                    5
                  </a>
                </li>
                <li class="waves-effect">
                  <a href="#!" class="blue-text">
                    <i class="material-icons">chevron_right</i>
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
