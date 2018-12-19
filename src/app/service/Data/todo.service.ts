import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoListFromServer(username) {
    return this.http.get<ToDo[]>(`http://localhost:8080/Todo/${username}`);
  }

  deleteTodoFromServer(username, id) {
    return this.http.delete(`http://localhost:8080/Todo/${username}/${id}`);
  }
  getTodoFromServer(username, id) {
    return this.http.get<ToDo>(`http://localhost:8080/Todo/${username}/${id}`);
  }
  updateTodoInServer(username, id, todo) {
    return this.http.put<ToDo>(`http://localhost:8080/Todo/${username}/${id}`, todo);
  }
  createTodoInServer(username, todo) {
    return this.http.post<ToDo>(`http://localhost:8080/Todo/${username}/create`, todo);
  }

}
