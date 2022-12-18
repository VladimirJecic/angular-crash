import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() tasksItem : Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;
  constructor(){
  }
  ngOnInit(): void {
    // this.tasksItem.addEventListener('dblclick', (event) => { console.log("Toggled Item")});
  }
  onDeleteClick(tasksItem: Task){
    //  console.log(tasksItem);
    this.onDeleteTask.emit(tasksItem);
  }
  // be aware that dblClick won't fire in Inspect if Device Emulation is on
  onDoubleClick(tasksItem: Task){
    console.log("Toggled Item!!!")
    this.onToggleTask.emit(tasksItem);
  }
  
}
