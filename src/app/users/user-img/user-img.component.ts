import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{
  @Input('user') user : any;
  @Output('childEvent') childEvent = new EventEmitter<any>();

  onMoreInfo(user : any){
    // alert(`Hello ${user.firstName}!`);
    this.childEvent.emit(user);
  }
}
