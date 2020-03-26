import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActionResultResponse } from '../_models/ActionResultResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required]
  });
  UserData = [];
  response: ActionResultResponse[];

  constructor(private loginservice: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  LoginSumit() {
    const fv = this.formData.value;
    this.loginservice.Login(fv.Username, fv.Password).subscribe((data: any[]) => { this.UserData = data });
    console.log(this.UserData);
  }

  /*this.UserData = data*/ /* console.log(data) */

  LoginSumit2() {
    const fv = this.formData.value;
    let token;
    this.loginservice.Login2(fv.Username, fv.Password)
      .subscribe(response => (
        response['data']
      ));
    /*
    const fv = this.formData.value;
    this.loginservice.Login2(fv.Username, fv.Password).subscribe(
      x => {
        console.log(x);
        // this.orders = x;
      }
    );
    */
  }

}
