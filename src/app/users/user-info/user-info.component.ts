import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('user') user: IUser;

  // tslint:disable-next-line: object-literal-key-quotes
  dynamicClass = {
    border: false,
    feature: true
  };
  dynamicStyle = {
    color : 'green'
  };

  onToggle() {
    this.dynamicClass.border = !this.dynamicClass.border;
    this.dynamicClass.feature = !this.dynamicClass.feature;
  }

  constructor() { }

  ngOnInit() {
  }

}
