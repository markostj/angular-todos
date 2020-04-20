import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { Todo } from '../../models/todo';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/todo.reducer';
import { deleteTodo, updateCompletion } from '../../store/todo.action';
import { FormControl, FormBuilder } from '@angular/forms';

enum Show {
  All = 'all',
  Completed = 'completed',
  Uncompleted = 'uncompleted',
}
interface AppState {
  todos: State;
  show: string;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todosSubscription: Subscription;
  todos: Todo[];
  id = new FormControl('');
  show = Show.All;

  idForm = this.fb.group({
    id: [''],
  });

  Show = Show;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todosSubscription = this.store
      .pipe(select('todos'))
      .subscribe((state: State) => {
        this.todos = state.todos;
      });
  }

  toggleCompletion(id: string) {
    this.store.dispatch(updateCompletion({ id }));
  }

  deleteTodo(id: string) {
    this.store.dispatch(deleteTodo({ id }));
  }

  showFilter(show: string) {
    switch (show) {
      case Show.All:
        this.show = Show.All;
        return;
      case Show.Completed:
        this.show = Show.Completed;
        return;
      case Show.Uncompleted:
        this.show = Show.Uncompleted;
        return;
      default:
        this.show = Show.All;
        return;
    }
  }
}
