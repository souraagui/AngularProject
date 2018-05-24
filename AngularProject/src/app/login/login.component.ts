import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required,
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    console.log(this.loginForm.value.valueOf().username + ' ' + this.loginForm.value.valueOf().password);
    alert(this.loginForm.value.valueOf().username + ' ' + this.loginForm.value.valueOf().password);
    if(this.loginForm.value.valueOf().username=='admin' && this.loginForm.value.valueOf().password=='admina'){

      this.router.navigate(['user']);
    }
  }

}
