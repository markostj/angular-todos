import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit(): void {
    /* this.todos = [
      { name: 'neki todo', date: '5.2.2020.', completed: false, id: '5324' },
      { name: 'neki todo', date: '5.2.2020.', completed: false, id: '5324' },
      { name: 'neki todo', date: '5.2.2020.', completed: false, id: '5324' },
    ]; */
    console.log(this.todos);
  }

  toogleCompletion() {}
}
