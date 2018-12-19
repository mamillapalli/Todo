import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/Data/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-todos/list-todos.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: ToDo;

  constructor(private todoservice: TodoService, private route: ActivatedRoute, private router: Router) {
    this.todo = new ToDo(route.snapshot.params['id'], '', false, new Date);
    if  ( route.snapshot.params['id'] !== '-1') {
      this.populateTodoInformation(route.snapshot.params['id']);
    }
   }

  populateTodoInformation(id) {
    this.todoservice.getTodoFromServer('ravikanth', id).subscribe(
      response => {
        console.log(response);
        this.todo = response;
      }
    );
  }

  ngOnInit() {
  }

  saveTodo(id, todo) {
    console.log('save Todo');
    if ( id === '-1') {
      this.todoservice.createTodoInServer('ravikanth' , todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      );
    } else {
       this.todoservice.updateTodoInServer( 'ravikanth' , id, todo).subscribe(
        response => {
        console.log(response);
        this.router.navigate(['todos']);
        }
      );
    }
  }

}
