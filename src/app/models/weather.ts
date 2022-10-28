export class Weather {
    nombre:string;
    icono:string;
    main:string;
    description:string;
    temperature:number;
    humidity:number;
    lon:number;
    lat:number;

    constructor(nombre:string,icono:string,main:string,description:string,temperature:number,humidity:number,lon:number,lat:number)   {
        this.nombre = nombre;
        this.icono = icono;
        this.main = main;
        this.description = description;
        this.temperature = temperature;
        this.humidity = humidity;
        this.lon = lon;
        this.lat = lat;
    }
}
