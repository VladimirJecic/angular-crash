import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import {Observable, of} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private  apiURL = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }

  getTaskObservable() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }

  
}
