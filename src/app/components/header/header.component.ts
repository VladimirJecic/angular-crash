import { Component, OnInit} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private  apiURL: string = 'http://localhost:5001/tasks';
  title : string = 'Task tracker';
  showAddTask: boolean = false;
  subscription: Subscription; 

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(visible=>
      (this.showAddTask = visible))
  }

  ngOnInit(): void { }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: String){
    return this.router.url === route;
  }
}
