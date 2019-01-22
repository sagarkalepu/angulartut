import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoList : {title: string, id: number}[] =[];
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodoList();
    this.todoService.todosEvent.subscribe((data) => {
      this.todoList = data;
    })
  }

}
