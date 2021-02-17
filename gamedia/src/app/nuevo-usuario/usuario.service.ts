import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';
import { NgModule } from '@angular/core';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  usuarioURL = "https://localhost:8000/api/user";

  constructor(private httpClient: HttpClient) { }


  public crear(usuario: Usuario){
    return this.httpClient.post<any>(this.usuarioURL ,usuario, cabecera);
  }

}
