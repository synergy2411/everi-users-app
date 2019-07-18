import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()
export class DataService{

  constructor(private httpClient : HttpClient,
      private authService : AuthService){}

  getData(){
    return USER_DATA;
  }

  getJsonData(){
    return this.httpClient.get("assets/model/user-data.json", {
      headers : new HttpHeaders().set("Allow-Access-Control-Origin", "*")
    });
      // .subscribe(response => console.log(response));
  }

  getAPIData(){
    return this.httpClient.get("https://everi-app-demo.firebaseio.com/userdata.json", {
      params : new HttpParams().set("auth", this.authService.getToken())
    })
  }

}
