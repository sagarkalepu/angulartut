import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from "../../../services/todo.service";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() public Todo :{title: string, id: number} ;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this.Todo);
  }

  handleClick(event: Event) {
    console.log(this.Todo);
    this.todoService.viewTodo.emit(this.Todo.id);
  }
}
