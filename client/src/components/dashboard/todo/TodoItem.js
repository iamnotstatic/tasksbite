import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import TodoContext from '../../../context/todo/todoContext';
import Spinner from '../../layout/Spinner';

import M from 'materialize-css/dist/js/materialize.min';

const TodoItem = () => {
  const todoContext = useContext(TodoContext);
  const { getTodos, loading, todos, setCurrent, deleteTodo } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {todos !== null && !loading ? (
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
                        onClick={() => setCurrent(todo)}
                      >
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a
                        href="#!"
                        className="secondary-content left"
                        onClick={() => {
                          deleteTodo(todo._id);
                          M.toast({
                            html: "<span class='green-text'>Todo deleted</span>"
                          });
                        }}
                      >
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                  </tr>
                </CSSTransition>
              ))}
            </tbody>
          </table>
        </Fragment>
      ) : (
        <Spinner />
      )}

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
