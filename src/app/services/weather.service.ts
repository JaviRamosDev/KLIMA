import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //public weather:Weather = new Weather('','','','',0,0);

  constructor(private http: HttpClient) { }

  getWeather(id:any): Observable<any> {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?id="+id+"&appid=5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b");
  }
}
