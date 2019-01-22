import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  show:boolean = false;
  ngOnInit() {
    this.todoService.addTodo.subscribe((data) => {
      this.show = data;
    })
  }

}
