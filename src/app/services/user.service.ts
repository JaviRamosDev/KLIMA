import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string): Observable<any> {
    return this.http.post("https://reqres.in/api/login", {
      "email":email,
      "password":password
    });
  }
}