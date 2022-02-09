import { Component, OnInit } from '@angular/core';

// Model
import { TodoModel } from '../../models/todo.model';

// Service
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos!: TodoModel[];
  constructor(
    private todosService: TodosService
  ) { }

  getTodos(): void {
    this.todosService.getTodos()
      .subscribe(todos => this.todos = todos)
  }

  ngOnInit() {
    this.getTodos()
  }

}
