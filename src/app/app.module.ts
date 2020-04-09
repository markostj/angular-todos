import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';

// modules
import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from './modules/todos/todos.module';

// components
import { AppComponent } from './app.component';

// store
import { todosReducer } from './modules/todos/store/todo.reducer';
import { State } from './modules/todos/store/todo.reducer';

const reducers: ActionReducerMap<any> = {
  todos: todosReducer,
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>(
  'todos'
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN),
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
export class AppModule {}
