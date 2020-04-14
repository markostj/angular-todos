import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Module for dynamic forms */
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { TodosComponent } from './views/todos/todos.component';
import { TodoComponent } from './views/todo/todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodosShowPipe } from './views/todos/todos-show.pipe';

@NgModule({
  declarations: [TodosComponent, TodoComponent, TodoAddComponent, TodosShowPipe],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [],
})
export class TodosModule {}
