import React from 'react';

const AddTodoModal = () => {
  return (
    <div id="add-todo-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Add a Todo</h4>
        <form>
          <div className="card-content">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="email">Title</label>
                <input type="text" className="validate" name="name" />
              </div>
              <div className="input-field col s12">
                <label htmlFor="email">Description</label>
                <textarea
                  name="desc"
                  className="materialize-textarea"
                ></textarea>
              </div>
            </div>
            <div className="card-action right-align center text-white">
              <button
                className="btn blue waves-effect waves-light"
                type="submit"
              >
                Submit <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
