import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as uuid from 'uuid/v1';
import { State } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { addTodo } from '../../store/todo.action';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  dt = new Date();

  date =
    this.dt.getDate() +
    '.' +
    (this.dt.getMonth() + 1) +
    '.' +
    this.dt.getFullYear() +
    '.';

  todoForm = this.fb.group({
    name: [''],
    date: [this.date],
    completed: [false],
  });

  todo: Todo;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todo = {
      name: 'todo neki',
      date: '20.5.2020.',
      completed: false,
      id: '2e1oi',
    };
  }

  addProduct() {
    console.log(this.todoForm.value);
    console.log(uuid());
    this.store.dispatch(addTodo(this.todo));
  }
}
