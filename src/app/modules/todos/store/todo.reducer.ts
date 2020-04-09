import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, updateTodo } from './todo.action';
import { Todo } from '../models/todo';

export interface State {
  todos: Array<Todo>;
}

export const initialState: State = {
  todos: Array<Todo>(),
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, actions) => {
    return { ...state, todos: [...state.todos, actions] };
  }),
  on(deleteTodo, (state, actions) => {
    state.todos = state.todos.filter((product) => product.id !== actions.id);
    return state;
  }),
  on(updateTodo, (state, actions) => {
    // something for this
    return state;
  })
);
