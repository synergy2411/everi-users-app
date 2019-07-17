import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()
export class DataService{

  constructor(private httpClient : HttpClient,
      private authService : AuthService){}

  getData(){
    return USER_DATA;
  }

  getJsonData(){
    return this.httpClient.get("assets/model/user-data.json");
      // .subscribe(response => console.log(response));
  }

  getAPIData(){
    return this.httpClient.get("https://everi-app-demo.firebaseio.com/userdata.json?auth=" + this.authService.getToken())
  }

}
