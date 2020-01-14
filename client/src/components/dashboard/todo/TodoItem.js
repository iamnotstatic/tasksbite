import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import TodoContext from '../../../context/todo/todoContext';
import Spinner from '../../layout/Spinner';

const TodoItem = () => {
  const todoContext = useContext(TodoContext);
  const { getTodos, loading, todos } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <table className="striped responsive-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos !== null && !loading ? (
            <Fragment>
              {todos.map(todo => (
                <CSSTransition timeout={500} key={todo._id} classNames="item">
                  <tr>
                    <td>{todo.description}</td>
                    {todo.completed ? (
                      <td>
                        <i className="material-icons green-text">check</i>
                      </td>
                    ) : (
                      <td>
                        <i className="material-icons">close</i>
                      </td>
                    )}
                    <td>{todo.createdAt}</td>
                    <td>
                      <a
                        href="#edit-todo-modal"
                        className="secondary-content modal-trigger left"
                      >
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!" className="secondary-content left">
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                  </tr>
                </CSSTransition>
              ))}
            </Fragment>
          ) : (
            <Spinner />
          )}
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
    </Fragment>
  );
};

export default TodoItem;
