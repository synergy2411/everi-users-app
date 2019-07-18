import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'users-app';

  htmlSnippets = "Template code <script>alert('Hello')</script>";

  dangerUrl = "javascript:alert('Hello Angular')";
  safeUrl : any;
  constructor(public authService : AuthService,
              private sanitize : DomSanitizer,
              private cdRef : ChangeDetectorRef){
                // this.cdRef.
                this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.dangerUrl);
              }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCnd3B0r4p_NjKsayEJApiENQGA6-QsTAs",
      authDomain: "everi-app-demo.firebaseapp.com"
    })
  }
}
