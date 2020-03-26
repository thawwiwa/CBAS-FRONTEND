import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { config } from '../cofig';


const httpOptions = {
  headers: new HttpHeaders({
    'API-KEY': 'Y2JhczphcGlieWR5bmFzdHljZXJhbWlj',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT', //OPTIONS
    // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }
}
