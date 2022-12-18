import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private  apiURL: string = 'http://localhost:5001/tasks';
  title : string = 'Task tracker';

  constructor() { }

  ngOnInit(): void {
  
  }

  toggleAddTask(){
    const urlTest = this.apiURL
    console.log("Toggled:")
  }

}
