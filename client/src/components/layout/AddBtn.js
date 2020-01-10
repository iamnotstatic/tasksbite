import React, { Fragment } from 'react';

const AddBtn = () => {
  return (
    <Fragment>
      <div className="fixed-action-btn">
        <a
          href="#!"
          className="btn-floating btn-large blue darken-2 waves-effect waves-light"
        >
          <i className="large material-icons">add</i>
        </a>
        <ul>
          <li>
            <a
              className="btn-floating green modal-trigger"
              href="#add-todo-modal"
            >
              <i className="material-icons">mode_edit</i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AddBtn;
