import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { TodoService } from '../service/Data/todo.service';


export class ToDo {
  constructor(public id: number, public description: string, public status: boolean, public targetDate: Date) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

   // tslint:disable-next-line:max-line-length
  //  todos = [{id: 1, description: 'learn to dance'}, { id: 2, description: 'become an expret in Angular'}, { id: 3, description: 'visit Switzerland'}];
   todos: ToDo[];
   messageToUser: string;
     //  = [new ToDo(1, 'learn to dance', false, new Date()), new ToDo(2, 'Become an Expert at Angular', false, new Date()),
  //           new ToDo( 3, 'Visit Switzerland', false, new Date())];

  // todos = [
  //   {id : 1, description : 'Learn to Dance'},
  //   {id : 2, description : 'Become an Expert at Angular'},
  //   {id : 3, description : 'Visit India'}
  // ] ;
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.refreshTodoList();
  }

  private refreshTodoList() {
    this.todoService.getTodoListFromServer('Ravikanth').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`TODO to deleted is${id}`);
    this.todoService.deleteTodoFromServer('Ravikanth', id).subscribe(
      response => {
        this.messageToUser = 'Todo succesfully deleted';
        this.refreshTodoList();
      }
    );
  }

  createTodo() {
    console.log('creating Todo');
    this.router.navigate(['todo', -1 ]);
  }

  updateTodo(id) {
    console.log(`Todo to be upated is${id}`);
    this.router.navigate(['todo', id]);
  }
}
