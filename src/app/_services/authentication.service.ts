import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() { }

  public get currentUserValue() {
    if (localStorage.getItem("cbas-token") == null) {
      return false;
    } else {
      return true;
    }
  }
}
