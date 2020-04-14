import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo';

@Pipe({
  name: 'todosShow',
})
export class TodosShowPipe implements PipeTransform {
  transform(todos: Todo[], show?: string): Todo[] {
    if (!show) {
      return todos;
    }
    switch (show) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
}
