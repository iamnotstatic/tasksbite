import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import AddBtn from '../../layout/AddBtn';

const Todos = () => {
  return (
    <Fragment>
      <AddBtn />
      <div className="row">
        <div className="col s12 m6 l4">
          <div className="card-panel blue lighten-1 white-text center">
            <i className="material-icons medium">insert_emoticon</i>
            <h5>Total Todos</h5>
            <h3 className="count">28300</h3>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card-panel green lighten-1 white-text center">
            <i className="material-icons medium">check_circle</i>
            <h5>Completed</h5>
            <h3 className="count">28300</h3>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card-panel red lighten-1 white-text center">
            <i className="material-icons medium">close</i>
            <h5>Pending</h5>
            <h3 className="count">28300</h3>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <span className="card-title center">TodoList</span>
          <TodoItem />
        </div>
      </div>
    </Fragment>
  );
};

export default Todos;
