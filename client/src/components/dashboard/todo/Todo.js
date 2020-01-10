import React from 'react';

const Todo = () => {
  return (
    <table className="striped responsive-table">
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
  );
};

export default Todo;
