import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActionResultResponse } from '../_models/ActionResultResponse';
import { Router } from '@angular/router';

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

  constructor(private loginservice: LoginService, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  LoginSumit() {
    const fv = this.formData.value;
    this.loginservice.Login(fv.Username, fv.Password).subscribe((data: any[]) => { this.UserData = data });
    console.log(this.UserData);
  }

  LoginSumit2() {
    const fv = this.formData.value;
    let token;
    this.loginservice.Login2(fv.Username, fv.Password)
      .subscribe(response => (
        localStorage.setItem('cbas-token', response['data'])
        /* response['data'] */
      ));
    console.log(localStorage.getItem("cbas-token"));
    this.router.navigate(['/customer']);
  }

  LoginSumit3() {
    const fv = this.formData.value;
    //let result;
    this.loginservice.Login3(fv.Username, fv.Password);
    this.router.navigate(['/customer']);
    // console.log(`this result : ${result}`);
    // console.log(result["data"]);
  }

}
