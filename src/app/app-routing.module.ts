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
/* 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './modules/todos/todos.module';

//  store
import { todosReducer, State } from './modules/todos/store/todo.reducer';
import { localStorageSyncReducer } from './modules/todos/store/localStorage';

const reducers: ActionReducerMap<any> = {
  todos: todosReducer,
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>(
  'todos'
);

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
    TodosModule,
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: reducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {} */
