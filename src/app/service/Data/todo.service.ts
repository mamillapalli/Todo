import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-todos/list-todos.component';
import { BACK_END_URI } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoListFromServer(username) {
    return this.http.get<ToDo[]>(`${BACK_END_URI}/Todo/${username}`);
  }

  deleteTodoFromServer(username, id) {
    return this.http.delete(`${BACK_END_URI}/Todo/${username}/${id}`);
  }
  getTodoFromServer(username, id) {
    return this.http.get<ToDo>(`${BACK_END_URI}/Todo/${username}/${id}`);
  }
  updateTodoInServer(username, id, todo) {
    return this.http.put<ToDo>(`${BACK_END_URI}/Todo/${username}/${id}`, todo);
  }
  createTodoInServer(username, todo) {
    return this.http.post<ToDo>(`${BACK_END_URI}/Todo/${username}/create`, todo);
  }

}
