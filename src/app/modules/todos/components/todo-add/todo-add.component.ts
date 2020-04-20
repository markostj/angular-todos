import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid/v1';
import { State } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo';
import { addTodo } from '../../store/todo.action';

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
    name: ['', Validators.required],
    date: [this.date],
    completed: [false],
  });

  todo: Todo;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {}

  addTodo() {
    if (this.todoForm.status === 'INVALID') {
      alert('Name input is empty');
      return;
    }
    this.todo = {
      name: this.todoForm.value.name,
      date: this.todoForm.value.date,
      completed: false,
      id: uuid(),
    };
    this.store.dispatch(addTodo(this.todo));

    this.todoForm.reset({ date: this.date });
  }
}
