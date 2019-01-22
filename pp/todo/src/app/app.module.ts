import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoListItemComponent } from './todolist/todo-list-item/todo-list-item.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../services/todo.service';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { AddtodooptionComponent } from './addtodos/addtodooption/addtodooption.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoListItemComponent,
    TodoComponent,
    AddtodosComponent,
    AddtodooptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
