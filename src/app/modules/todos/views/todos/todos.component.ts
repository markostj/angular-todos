import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from '../../models/todo';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store/todo.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnChanges, OnInit {
  productsSubscription: Subscription;
  todos: Todo[];
  constructor(private store: Store<State>) {}

  ngOnChanges() {
    console.log(this.todos);
  }

  ngOnInit(): void {
    /* this.todos = [
      { name: 'neki todo', date: '5.2.2020.', completed: false, id: '5324' },
      { name: 'neki todo', date: '5.2.2020.', completed: false, id: '5324' },
      { name: 'neki todo', date: '5.2.2020.', completed: false, id: '5324' },
    ]; */

    this.productsSubscription = this.store.subscribe((state: State) => {
      this.todos = state.todos;
    });

    console.log(this.todos);
  }

  toogleCompletion() {
    this.store.subscribe((state: State) => {
      console.log(state.todos);
    });
  }
}
