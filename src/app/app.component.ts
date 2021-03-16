import { Component } from '@angular/core';
import {Todo} from '../model/todo';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Feladatok lista';
  newTask: string = '';
  tasks: Todo[] = [];

  constructor(private todoService: TodoService) {
   this.loadItems();
  }

  loadItems(): void {
    this.todoService.getTodo().subscribe(res => {
      this.tasks = res;
    });
  }

  addTask(): void {
    const isConsist = this.tasks.find(task => task.description === this.newTask);
    if (!isConsist && this.newTask !== '') {
      this.todoService.addTodo(this.newTask).subscribe(res => {
        this.tasks.push(res);
        this.newTask = '';
      });
    }
  }

  removeTask(id: number): void {
    this.todoService.removeTodo(id).subscribe(res => {
      this.loadItems();
    });
  }
}
