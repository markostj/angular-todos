import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/todo.reducer';
import { deleteTodo, updateTodo } from '../../store/todo.action';
import { FormBuilder } from '@angular/forms';

interface AppState {
  todos: State;
  update: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  routeSubscription: Subscription;
  id: string;
  todosSubscription: Subscription;
  todo: Todo[];

  todoUpdate = this.fb.group({
    name: [''],
    date: [''],
    completed: [false],
  });

  update = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = params.get('id');
        this.todosSubscription = this.store
          .pipe(select('todos'))
          .subscribe((state: State) => {
            this.todo = state.todos.filter((todo) => todo.id === this.id);
          });
      }
    );
  }

  updateTodo(name: string, date: string, completed: boolean) {
    this.todoUpdate.setValue({
      name,
      date,
      completed,
    });
    this.update = true;
  }

  saveTodo() {
    this.store.dispatch(
      updateTodo({
        id: this.id,
        name: this.todoUpdate.value.name,
        date: this.todoUpdate.value.date,
        completed: this.todoUpdate.value.completed,
      })
    );
    this.update = false;
  }

  deleteTodo(id: string) {
    this.store.dispatch(deleteTodo({ id }));
    this.router.navigate(['']);
  }
  backToTodos() {
    this.router.navigate(['']);
  }
}
