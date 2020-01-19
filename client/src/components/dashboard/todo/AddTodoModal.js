import React, { useState, useContext } from 'react';
import TodoContext from '../../../context/todo/todoContext';

import M from 'materialize-css/dist/js/materialize.min';

const AddTodoModal = () => {
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;

  const onSubmit = e => {
    e.preventDefault();
    if (description === '') {
      return M.toast({
        html: '<span class="red-text">Description cannot be empty</span>'
      });
    } else {
      addTodo({
        description,
        completed
      });
    }
    setDescription('');
    setCompleted(false);
    return M.toast({ html: '<span class="green-text">Task added</span>' });
  };

  return (
    <div id="add-todo-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Add a Task</h4>
        <form onSubmit={onSubmit}>
          <div className="card-content">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="email">Description</label>
                <textarea
                  name="description"
                  className="materialize-textarea"
                  required
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="input-field col s12">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      className="filled-in"
                      checked={completed}
                      value={completed}
                      onChange={e => setCompleted(!completed)}
                    />
                    <span>Completed</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="card-action right-align center text-white">
              <button
                className="modal-close btn blue waves-effect waves-light"
                type="submit"
              >
                Add task <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
