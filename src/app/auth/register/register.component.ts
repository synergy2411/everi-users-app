import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username = new FormControl('', [
    Validators.email,
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamationMark
  ]);

  cnfPassword = new FormControl('', [
    this.confirmPassword
  ])
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService : AuthService) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      confirmPassword: this.cnfPassword
    })
  }

  hasExclamationMark(input: FormControl) {
    const hasExcalamation = input.value.indexOf('!') >= 0;
    return hasExcalamation ? null : { noExclamantion: true };
  }

  confirmPassword(input: FormControl) {
    if (input.parent && input.parent.controls) {
      const samePassword = input.value === input.parent.controls['password'].value;
      return  samePassword ? null : { misMatchPassword: true };
    }
  }

  onRegister() {
    console.log("Username : ", this.registerForm.value.username);
    console.log("Password : ", this.registerForm.value.password);
    this.authService.register(
      this.registerForm.value.username,
      this.registerForm.value.password
    )
  }

}
