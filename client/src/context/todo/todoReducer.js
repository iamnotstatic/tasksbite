import {
  ADD_TODO,
  GET_TODOS,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_TODO,
  UPDATE_TODO,
  CLEAR_TODOS,
  FILTER_TODO,
  CLEAR_FILTER,
  TODO_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };

    case TODO_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
