import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ActionResultResponse } from '../_models/ActionResultResponse';

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
export class LoginService {
  // private currentUserSubject: BehaviorSubject<Users>;
  private cbas_api = 'https://localhost:44392/api/';
  // public currentUser: Observable<Users>;

  constructor(private httpClient: HttpClient) {
  }

  public Login(Username: string, Pass: string) {
    return this.httpClient.get(this.cbas_api + 'Auth/Login'
      + '?Username=' + Username
      + '&Password=' + Pass
      + '&Mode=login'
      , httpOptions);
  }

  public Login2(Username: string, Pass: string): Observable<ActionResultResponse[]> {
    // getHeroes (): Observable<Hero[]> {
    return this.httpClient.get<ActionResultResponse[]>(this.cbas_api + 'Auth/Login'
      + '?Username=' + Username
      + '&Password=' + Pass
      + '&Mode=login'
      , httpOptions);
    // }

    /*
    return ajax.get(`${this.cbas_api}/Auth/Login?Username=${Username}&Password=${Pass}&Mode=login`, {
      // Authorization: `Bearer ${config.airtable.apiKey}`,
      headers: {
        "API-KEY": "Y2JhczphcGlieWR5bmFzdHljZXJhbWlj"
      }
    }).pipe(
      map(response => console.log('response: ', response)),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      }));
      */
  }

  public Login3(Username: string, Password: string){
    return this.httpClient.get(this.cbas_api + 'Auth/Login'
    + '?Username=' + Username
    + '&Password=' + Password
    + '&Mode=login'
    , httpOptions).toPromise().then( result=> JSON.stringify(result));
  }

}


/*
  public getOrders() {
    return ajax.getJSON(`${config.airtable.baseUrl}/Orders`, {
      Authorization: `Bearer ${config.airtable.apiKey}`
    }).pipe(
      map((x: any) => x.records.map((y: any) => {
        const p = y.fields.Price;
        const side = y.fields.Side;
        const v = y.fields.Volume;
        const d = y.fields.Date;

        return new Order('SYM', side, p, v, d);
      })));
  }


  getUser(): Observable<User> {
  return this.httpClient.get<any>(url).pipe(
    map(data => new User(data.name, data.email))
  );
}
*/
