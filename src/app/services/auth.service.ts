import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

  private token = null;

  constructor(private router : Router){}

  register(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log("User Registered."))
      .catch(err => console.log(err));
  }

  login(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            this.router.navigate(['users']);
          }).catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }


}
