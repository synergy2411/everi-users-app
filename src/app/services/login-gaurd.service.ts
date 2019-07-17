import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuardService implements CanActivate{
  canActivate(){
    return this.authService.isAuthenticated();
  }

  constructor(private authService : AuthService){}
}
