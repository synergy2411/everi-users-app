import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input('user') user: IUser;

  dynamicClass = { 'border': false, 'feature': true }

  onToggle(){
    this.dynamicClass.border = !this.dynamicClass.border;
    this.dynamicClass.feature = !this.dynamicClass.feature;
  }

  constructor() { }

  ngOnInit() {
  }

}
