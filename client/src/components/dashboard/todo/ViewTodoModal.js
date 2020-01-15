import React, { Fragment, useContext, useEffect } from 'react';
import TodoContext from '../../../context/todo/todoContext';

const ViewTodoModal = () => {
  const todoContext = useContext(TodoContext);
  const { todo } = todoContext;

  return (
    <div id="view-todo-modal" className="modal">
      <div className="modal-content center">
        {todo && (
          <Fragment>
            <p style={{ fontSize: '20px' }}>{todo.description}</p>
            <h6>
              <b>Status:</b>{' '}
              {todo.completed ? (
                <span className="green-text">Completed</span>
              ) : (
                <span className="red-text">Pending</span>
              )}
            </h6>
            <h6>
              <b>Created Date:</b> {todo.createdAt}
            </h6>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ViewTodoModal;
