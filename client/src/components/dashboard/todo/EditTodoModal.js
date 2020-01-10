import React from 'react';

const EditTodoModal = () => {
  return (
    <div id="edit-todo-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Edit a Todo</h4>
        <form>
          <div className="card-content">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="title">Title</label>
                <input type="text" className="validate" name="name" />
              </div>
              <div className="input-field col s12">
                <label htmlFor="desc">Description</label>
                <textarea
                  name="desc"
                  className="materialize-textarea"
                ></textarea>
              </div>
              <div className="input-field col s12">
                <p>
                  <label>
                    <input type="checkbox" name="" className="filled-in" />
                    <span>Completed</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="card-action right-align center text-white">
              <button
                className="btn blue waves-effect waves-light"
                type="submit"
              >
                Updated <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodoModal;
