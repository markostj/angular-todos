import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from '../../models/todo';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/todo.reducer';
import { deleteTodo, updateCompletion } from '../../store/todo.action';
import { FormControl, FormBuilder } from '@angular/forms';

enum show {
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
  show = show.All;

  idForm = this.fb.group({
    id: [''],
  });

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

  showAll() {
    this.show = show.All;
  }
  showCompleted() {
    this.show = show.Completed;
  }
  showUncompleted() {
    this.show = show.Uncompleted;
  }
}
