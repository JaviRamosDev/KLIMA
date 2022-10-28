import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:string='';

  constructor(private http: HttpClient) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this.token!='') {return true}
    return false;
  }

  login(email:string, password:string): Observable<any> {
    return this.http.post("https://reqres.in/api/login", {
      "email":email,
      "password":password
    });
  }
}