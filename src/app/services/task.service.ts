import { Injectable } from '@angular/core';
import { Task } from '../Task';
import {Observable} from 'rxjs'
// http client returns the observable so we don't need to import 'for'
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private  apiURL: string = 'http://localhost:5001/tasks';
  constructor(private http: HttpClient) { }

  getTaskObservable() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }
  deleteTask(taskP : Task): Observable<Task> {
   const url = `${this.apiURL}/${taskP.id}`
   return this.http.delete<Task>(url);
  }
  updateTaskReminder(taskP:Task): Observable<Task> {
    const url = `${this.apiURL}/${taskP.id}`
    return this.http.put<Task>(url, taskP,httpOptions)
  }
  addTask(taskP:Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, taskP,httpOptions)
  }

  
}
