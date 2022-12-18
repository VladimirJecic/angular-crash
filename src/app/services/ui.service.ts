import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private visible: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    console.log("123")
    this.visible = !this.visible;
    this.subject.next(this.visible)
  }

  onToggle() :Observable<any> {
    return this.subject.asObservable();
  }
}
