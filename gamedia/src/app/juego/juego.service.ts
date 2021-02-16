import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  tokenURL = "https://id.twitch.tv/oauth2/token?client_id=1d3ja1yolgv4sy0cjqxtnnqy4qdfgx&client_secret=q5hm0x31bm2659rghs9z8cqmzljn15&grant_type=client_credentials"
  apiURL = "https://api.igdb.com/v4/games"
  token = localStorage.getItem('access_token');
  body = "";
  cabecera: any;
  juegos = [] as any;
  

  constructor(private httpClient: HttpClient) { }
  
  public consultaJuego(token: string){
    if (token != null){
      this.cabecera = {headers: new HttpHeaders({'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer '+token})};
    } else {
      console.log("Error al comprobar el Token. No se ha proporcionado.");
      return;
    }
    console.log(token);
    this.postJuegos(this.cabecera);
  }

  public getToken(){
    return this.httpClient.post(this.tokenURL, "").subscribe((resp: any) => {
      localStorage.setItem('access_token', resp.access_token);
    });
  } 

  public postJuegos(body: any, cabecera: any) {
    return this.httpClient.post(this.apiURL, body, cabecera);
  }
}
