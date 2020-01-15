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

    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        loading: false
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload),
        loading: false
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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
