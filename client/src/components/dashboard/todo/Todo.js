import React from 'react';

const Todo = () => {
  return (
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
  );
};

export default Todo;
