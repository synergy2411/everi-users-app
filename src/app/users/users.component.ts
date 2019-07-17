import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';
import { IUser } from '../model/user.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})

export class UsersComponent implements OnInit
// OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
// AfterViewInit, AfterViewChecked, OnDestroy
{

  @Input() title: string;
  users: IUser[];

  moreInfo(user: IUser) {
    alert(`Here is the info,
    Mr. ${user.firstName} is working with ${user.company}!!`);
  }

  constructor(private dataService : DataService) { }

  ngOnInit() {

    this.dataService.getAPIData()
      .subscribe(response => this.users = <IUser[]> response)

    // this.dataService.getJsonData()
    //   .subscribe(
    //     response => this.users = response['userdata'],
    //     err => console.log(err),
    //     () => console.log("COMPLETE"));

    // this.users = this.dataService.getData();
    // this.users = USER_DATA;
  }



// npm i firebase --save




  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes);
  // }
  // ngDoCheck() { console.log('ngDoCheck'); }
  // ngAfterContentInit() { console.log('ngAfterContentInit'); }
  // ngAfterContentChecked() { console.log('ngAfterContentChecked'); }
  // ngAfterViewInit() { console.log('ngAfterViewInit'); }
  // ngAfterViewChecked() { console.log('ngAfterViewChecked'); }
  // ngOnDestroy() { console.log('ngOnDestroy'); }

}
