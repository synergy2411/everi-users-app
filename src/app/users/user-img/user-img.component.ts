import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{
  @Input('user') user : any;

  onMoreInfo(user : any){
    alert(`Hello ${user.firstName}!`);
  }
}
