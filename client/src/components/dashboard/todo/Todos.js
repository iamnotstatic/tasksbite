import React, { Fragment, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddBtn from '../../layout/AddBtn';
import Spinner from '../../layout/Spinner';
import TodoContext from '../../../context/todo/todoContext';

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { getTodos, loading, todos } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  // Get Value of completed todos
  const completed = arr => {
    if (arr) {
      let completedValue = [];
      arr.forEach(todo => {
        if (todo.completed) {
          completedValue.push(todo);
        }
      });

      return completedValue.length;
    }
  };

  // Get Value of uncompleted todos
  const unCompleted = arr => {
    if (arr) {
      let unCompletedValue = [];
      arr.forEach(todo => {
        if (!todo.completed) {
          unCompletedValue.push(todo);
        }
      });

      return unCompletedValue.length;
    }
  };

  return (
    <Fragment>
      <AddBtn />
      <div className="row">
        <div className="col s12 m6 l4">
          <div className="card-panel blue lighten-1 white-text center">
            <i className="material-icons medium">insert_emoticon</i>
            <h5>Total Todos</h5>
            <h3 className="count">{todos && todos.length}</h3>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card-panel green lighten-1 white-text center">
            <i className="material-icons medium">check_circle</i>
            <h5>Completed</h5>
            <h3 className="count">{completed(todos)}</h3>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card-panel red lighten-1 white-text center">
            <i className="material-icons medium">close</i>
            <h5>Pending</h5>
            <h3 className="count">{unCompleted(todos)}</h3>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <span className="card-title center">Tasks</span>
          {todos !== null && todos.length === 0 && !loading ? (
            <h5 className="center">Please add a task</h5>
          ) : (
            <TodoItem />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Todos;
