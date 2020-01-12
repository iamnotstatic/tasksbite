import React, { Fragment } from 'react';

const Todo = () => {
  return (
    <Fragment>
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
          <table className="striped responsive-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Development</td>
                <td>Finish my Todo App</td>
                <td>
                  <i className="material-icons green-text">check</i>
                </td>
                <td>Jan 1, 2018</td>
                <td>
                  <a
                    href="#edit-todo-modal"
                    className="secondary-content modal-trigger"
                  >
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
                <td>Web Development</td>
                <td>Finish my Todo App</td>
                <td>
                  <i className="material-icons grey-text">close</i>
                </td>
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
                <td>Web Development</td>
                <td>Finish my Todo App</td>
                <td>
                  <i className="material-icons">check</i>
                </td>
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
                <td>Web Development</td>
                <td>Finish my Todo App</td>
                <td>
                  <i className="material-icons">close</i>
                </td>
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
            </tbody>
          </table>

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
    </Fragment>
  );
};

export default Todo;
