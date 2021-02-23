import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadosPortadaService {

  apiURL = "/v4/games"
  cabecera: any;
  body: any;
  
  constructor(private httpClient: HttpClient) { }
  
  public consultaJuego(token: string, opcion: string){
    if (token != null){
      if(opcion == "mejorValorados"){
        this.cabecera = {headers: new HttpHeaders({'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer '+token})};
        this.body = "fields id, name, cover.url, rating; sort rating desc; limit 100;";
      } else if(opcion == "masSeguidos") {
        this.cabecera = {headers: new HttpHeaders({'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer '+token})};
        this.body = "fields id, name, cover.url, follows; sort follows desc; limit 100;";
      } else if(opcion == "ultimos"){
        this.cabecera = {headers: new HttpHeaders({'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer '+token})};
        this.body = "fields id, name, cover.url; where first_release_date < 1538129354; sort first_release_date desc; limit 100;";
      }
    } else {
      console.log("Error al comprobar el Token. No se ha proporcionado."); 
    }
    return this.httpClient.post(this.apiURL, this.body, this.cabecera);
  }

}
