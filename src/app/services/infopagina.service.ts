import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Infopagina } from '../interfaces/infoagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: Infopagina ={};
  cargada=false;
  equipo: any[] = [];

  constructor(private http: HttpClient) { 

    this.cargarinfo();
    this.cargarEquipo();

    // leer archivos json
  
  }

  private cargarinfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: Infopagina) =>{
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
    });
  }

  private cargarEquipo(){
    this.http.get('https://ejemplo-43056.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) =>{
  
      this.equipo = resp;
      // console.log(resp);
    });

  }
}
