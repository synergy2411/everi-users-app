import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { IUser } from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})

export class UsersComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy{

  user: IUser = {
    firstName: "Bill",
    lastName: "Gates",
    income: 50000,
    isWorking: true,
    company: "Microsoft Inc",
    dob: new Date('Dec 12, 1965'),
    image: "./assets/images/bill.jpg",
    votes: 120
  }

  moreInfo(user: IUser) {
    alert(`Here is the info,
    Mr. ${user.firstName} is working with ${user.company}!!`);
  }

  ngOnInit() { console.log('ngOnInit'); }
  ngOnChanges() { console.log('ngOnChanges'); }
  ngDoCheck(){ console.log('ngDoCheck');}
  ngAfterContentInit(){ console.log('ngAfterContentInit');}
  ngAfterContentChecked(){ console.log('ngAfterContentChecked');}
  ngAfterViewInit(){ console.log('ngAfterViewInit');}
  ngAfterViewChecked(){ console.log('ngAfterViewChecked');}
  ngOnDestroy(){ console.log('ngOnDestroy');}

}
