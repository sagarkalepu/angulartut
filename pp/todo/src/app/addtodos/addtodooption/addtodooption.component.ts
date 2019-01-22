import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-addtodooption',
  templateUrl: './addtodooption.component.html',
  styleUrls: ['./addtodooption.component.css']
})
export class AddtodooptionComponent implements OnInit {

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
  }
  handleClick(event: Event) {
    this.todoService.addTodo.emit(true);
  }
}
