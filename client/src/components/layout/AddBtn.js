import React from 'react';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn click-to-toggle">
      <a
        href="#add-todo-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger waves-effect waves-light"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#edit-profile-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#edit-profile-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">mode_edit</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
