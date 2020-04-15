import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

enum ProductActions {
  AddTodo = 'todo/add',
  DeleteTodo = 'todo/delete',
  UpdateCompletion = 'todo/updateCompletion',
  UpdateTodo = 'todo/updateTodo',
}

export const addTodo = createAction(ProductActions.AddTodo, props<Todo>());

export const deleteTodo = createAction(
  ProductActions.DeleteTodo,
  props<{ id: string }>()
);

export const updateCompletion = createAction(
  ProductActions.UpdateCompletion,
  props<{ id: string }>()
);

export const updateTodo = createAction(
  ProductActions.UpdateTodo,
  props<Todo>()
);
