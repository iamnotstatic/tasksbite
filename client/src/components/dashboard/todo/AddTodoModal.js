import React, { useState, useContext } from 'react';
import TodoContext from '../../../context/todo/todoContext';

import M from 'materialize-css/dist/js/materialize.min';

const AddTodoModal = () => {
  const [todo, setTodo] = useState({
    description: '',
    completed: false
  });
  const todoContext = useContext(TodoContext);
  const { addTodo } = todoContext;
  const { description, completed } = todo;

  const onChange = e => setTodo({ ...todo, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (description === '') {
      M.toast({ html: '<span class="red-text">All field are required</span>' });
    } else {
      addTodo({
        description
      });
    }
    setTodo({
      description: ''
    });
    M.toast({ html: '<span class="green-text">Todo added</span>' });
  };

  return (
    <div id="add-todo-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Add a Todo</h4>
        <form onSubmit={onSubmit}>
          <div className="card-content">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="email">Description</label>
                <textarea
                  name="description"
                  className="materialize-textarea"
                  value={description}
                  onChange={onChange}
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
                      onChange={e => setTodo(!completed)}
                    />
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
