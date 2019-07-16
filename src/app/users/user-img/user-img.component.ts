import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('user') user: any;
  // tslint:disable-next-line: no-output-rename
  @Output('childEvent') childEvent = new EventEmitter<IUser>();

  onMoreInfo(user: IUser) {
    // alert(`Hello ${user.firstName}!`);
    this.childEvent.emit(user);
  }
}
