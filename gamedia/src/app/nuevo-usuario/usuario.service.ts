import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';
import { NgModule } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  
  usuarioURL = "http://localhost:8000/api/users";
  

  constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any> {
      return this.httpClient.get<any>('/api/users')
    }
 
  public crear(usuario: Usuario){
    return this.httpClient.post<any>(this.usuarioURL ,usuario);
  }

}
