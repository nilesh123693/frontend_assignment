import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public users: any = [];
  show = false;
  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this._appService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
  displaydata() {
    this.show = !this.show;
  }
}
