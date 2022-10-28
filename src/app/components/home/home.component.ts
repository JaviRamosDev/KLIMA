import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import data from '../../../assets/cities.json';
import {FormControl} from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombreCiudades: string[] = data.map(element => {
    return element.name;
  });

  Items:  string[];
  autoFilter: Observable<string[]>;
  formControl = new FormControl(); 
  mostrarInfo;
  nombreCiudad;
  favoritas:string[] = [];
  weather:Weather;

  constructor(private httpClient: HttpClient, public ws:WeatherService) { 
    this.mostrarInfo = false;
    this.nombreCiudad = '';
    this.Items = this.nombreCiudades;
    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );
    this.weather = new Weather('','','','',0,0,0,0);
  }

  ngOnInit(): void {
    this.mostrarInfo = true
  }

  private mat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Items.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public agregarFavorita()  {
    try {
      this.obtenerIdCiudad();
      if(!this.favoritas.includes(this.nombreCiudad))  {
        this.favoritas.push(this.nombreCiudad);
      }
      this.obtenerWeather(this.obtenerIdCiudad());
    }catch(err) {
      console.log('nombre no encontrado');
    }
  }

  public eliminarFavorita(posicion:number)  {
    this.favoritas.splice(posicion,1);
  }

  obtenerIdCiudad = () => {
    return data.filter(
      (ciudad) => ciudad.name === this.nombreCiudad,
    )[0].id || {};
  }

  obtenerWeather(id:any)  {
    this.ws.getWeather(id).subscribe( data => {
      this.weather = new Weather(data.name, 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png', data.weather[0].main, data.weather[0].description, data.main.temp-273, data.main.humidity, data.coord.lon, data.coord.lat);
      console.log(this.weather);
    });
  }
}