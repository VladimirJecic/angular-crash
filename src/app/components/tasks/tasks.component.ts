import { Component, OnInit } from '@angular/core';
import { TaskService  } from 'src/app/services/task.service';

import {Task} from '../../Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  taskArray: Task[] = [];
  
  constructor(private taskService : TaskService) {
    
  }

  ngOnInit(): void {
    this.taskService.getTaskObservable().subscribe((taskArrayPromise) => (this.
      taskArray = taskArrayPromise));
  }
  
  addTask(taskToAdd: Task) :void{
    this.taskService.addTask(taskToAdd).subscribe(t => 
      (this.taskArray.push(t)));
  }  
  deleteTask(taskToDelete: Task ) :void {
    //console.log("deleteTask Toggled")
      this.taskService.deleteTask(taskToDelete).subscribe(()=>{
      this.taskArray = this.taskArray.filter(t=> t.id !== taskToDelete.id)
      // for each iterable element t in this.taskArray filter out only elements that don't have id
      //of the deleted task.
    });
  }
  toggleReminder(toggledTask: Task) :void {
    toggledTask.reminder = !toggledTask.reminder;
    this.taskService.updateTaskReminder(toggledTask).subscribe();

  }
  

}
