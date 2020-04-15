import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  deleteTodo,
  updateCompletion,
  updateTodo,
} from './todo.action';
import { Todo } from '../models/todo';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, actions) => {
    return { ...state, todos: [...state.todos, actions] };
  }),
  on(deleteTodo, (state, actions) => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== actions.id),
    };
  }),
  on(updateCompletion, (state, actions) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === actions.id ? { ...todo, completed: !todo.completed } : todo
      ),
    };
  }),
  on(updateTodo, (state, actions) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === actions.id
          ? {
              ...todo,
              name: actions.name,
              date: actions.date,
              completed: actions.completed,
            }
          : todo
      ),
    };
  })
);
