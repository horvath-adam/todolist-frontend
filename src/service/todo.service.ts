import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

const url = 'https://localhost:44357/api/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(url);
  }

  addTodo(newItem: string): Observable<Todo> {
    return this.http.post<Todo>(url, {description: newItem});
  }

  removeTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(url + '/' + id);
  }
}
