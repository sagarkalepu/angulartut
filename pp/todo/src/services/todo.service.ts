import { Injectable, EventEmitter } from '@angular/core';



@Injectable()
export class TodoService{
    todos: {id: number, title: string, description: string, status: string}[] = [
        {
            id : 1,
            title: "todo1",
            description: "descrption1",
            status: "notDone"
        },
        {
            id : 2,
            title: "todo2",
            description: "descrption2",
            status: "notDone"
        }
    ]

    viewTodo = new EventEmitter<number>();
    todosEvent = new EventEmitter<{id: number, title: string, description: string, status: string}[]>();
    addTodo = new EventEmitter<boolean>();
    public getTodoList() {
        return this.todos.map((todo) => ({title: todo.title, id: todo.id}));
    }

    public getTodo(id: number) {
        return this.todos.filter(todo => (todo.id == id))
    }

    public getFirst() {
        return this.todos[0];
    }

    public deleteTodo(id: number) {
        this.todos = this.todos.filter((todo) => (todo.id !== id));
        this.todosEvent.emit(this.todos);
    }
}