import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from '../../models/todo';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/todo.reducer';
import { deleteTodo } from '../../store/todo.action';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnChanges, OnInit {
  todosSubscription: Subscription;
  todos: Todo[];
  id = new FormControl('');

  idForm = this.fb.group({
    id: [''],
  });

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnChanges() {
    console.log(this.todos);
  }

  ngOnInit(): void {
    this.todosSubscription = this.store
      .pipe(select('todos'))
      .subscribe((state) => {
        console.log(state);
        this.todos = state;
      });
  }

  toogleCompletion() {
    // Change Completion
  }

  deleteTodo() {
    console.log(this.idForm.value.id);
    this.store.dispatch(deleteTodo({ id: this.idForm.value.id }));
  }

  consoleTodo() {
    this.store.subscribe((state: State) => {
      console.log(state.todos);
    });
  }
}
