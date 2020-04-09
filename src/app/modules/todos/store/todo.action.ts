import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

enum ProductActions {
  AddTodo = 'todo/add',
  DeleteTodo = 'todo/delete',
  UpdateTodo = 'todo/update',
}

export const addTodo = createAction(ProductActions.AddTodo, props<Todo>());

export const deleteTodo = createAction(
  ProductActions.DeleteTodo,
  props<{ id: string }>()
);

/* We are going to update all value in Todo */
export const updateTodo = createAction(
  ProductActions.UpdateTodo,
  props<Todo>()
);
