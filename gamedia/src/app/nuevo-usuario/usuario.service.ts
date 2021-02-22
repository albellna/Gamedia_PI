import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';




@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  
  usuarioURL = "https://localhost:8000/api/users";
  

  constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any> {
      return this.httpClient.get<any>('/api/users')
    }
 
  public crear(usuario: Usuario){
    return this.httpClient.post<any>(this.usuarioURL ,usuario);
  }

}
