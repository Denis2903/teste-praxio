import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, mergeMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpClient: HttpClient) {

  }

  private urlLogin = "http://localhost:3000/RequestToken/"
  private url = "http://localhost:3000/users/"

  getLogin(filtro): Observable<any> {
    return this.httpClient.post<any>(this.urlLogin, filtro).pipe(map((res: any) => {
      return true
    }))
  }
  insert(filtro): Observable<any> {
    return this.httpClient.post<any>(this.url, filtro).pipe(map((res: any) => {
      return true
    }))
  }
}
