import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl : './users.component.html',
  styleUrls : []
})

export class UsersComponent {

  user = {
    firstName : "Bill",
    lastName : "Gates",
    income : 50000,
    isWorking : true,
    company : "Microsoft Inc",
    dob : new Date('Dec 12, 1965'),
    image : "./assets/images/bill.jpg",
    votes : 120
  }

  moreInfo(user : any){
    alert(`Here is the info,
    Mr. ${user.firstName} is working with ${user.company}!!`);
  }






}
