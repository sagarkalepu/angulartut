import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public todo: {id: number, title: string, description: string} ;
  constructor(private todoService: TodoService) { 

  }
  ngOnInit() {
    this.todo = this.todoService.getFirst();
    this.todoService.viewTodo.subscribe((id) => {
      console.log(id);
      this.todo = this.todoService.getTodo(id)[0]
    })
  }
  todoDone() {
    this.todoService.deleteTodo(this.todo.id);
    this.todo = this.todoService.getFirst();
  }
  
  todoDelete() {
    this.todoService.deleteTodo(this.todo.id);
    this.todo = this.todoService.getFirst();
  }

}
