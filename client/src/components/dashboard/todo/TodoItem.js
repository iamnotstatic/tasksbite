import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date Created</th>
          </tr>
        </thead>

        {todos !== null && !loading ? (
          <TransitionGroup>
            {todos.map(todo => (
              <CSSTransition>
                <tr>
                  <td>{todo.description}</td>
                </tr>
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}

        {/* <tbody>
          <tr>
            {todos !== null && !loading ? (
              <TransitionGroup>
                {todos.map(todo => (
                  <CSSTransition key={todo._id} timeout={500} classNames="item">
                    (<td>{todo.description}</td>
                    <td>
                      <i className="material-icons green-text">check</i>
                    </td>
                    <td>{todo.createdAt}</td>
                    <td>
                      <a
                        href="#edit-todo-modal"
                        className="secondary-content modal-trigger"
                      >
                        <i className="material-icons grey-text">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!" className="secondary-content">
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </td>
                    )
                  </CSSTransition>
                ))}
              </TransitionGroup>
            ) : (
              <h1>Hello</h1>
            )}
          </tr>
        </tbody> */}
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
