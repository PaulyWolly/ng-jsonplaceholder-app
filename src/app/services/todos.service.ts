import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { TodoModel } from '../models/todo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class TodosService {
  private todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.todosUrl)
  }

  getTodo(id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(`${this.todosUrl}/${id}`)
  }

}
