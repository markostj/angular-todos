import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './modules/todos/views/todos/todos.component';
import { TodoComponent } from './modules/todos/views/todo/todo.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/:id', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
