import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-app';

  constructor(public authService : AuthService){}
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCnd3B0r4p_NjKsayEJApiENQGA6-QsTAs",
      authDomain: "everi-app-demo.firebaseapp.com"
    })
  }
}
