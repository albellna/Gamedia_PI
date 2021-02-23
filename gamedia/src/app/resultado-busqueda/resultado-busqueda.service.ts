import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoBusquedaService {

  apiURL = "/v4/games"
  cabecera: any;
  body: any;

  constructor(private httpClient: HttpClient) { }

  public queryBusqueda(token: string, busqueda: string) {
    if (token != null) {
      this.cabecera = { headers: new HttpHeaders({ 'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer ' + token }) };
      this.body = 'fields id, name, cover.url; search "' + busqueda + '"; limit 500;';
    } else {
      console.log("Error al comprobar el Token. No se ha proporcionado.");
    }
    return this.httpClient.post(this.apiURL, this.body, this.cabecera);
  }
}