import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  tokenURL = "https://id.twitch.tv/oauth2/token?client_id=1d3ja1yolgv4sy0cjqxtnnqy4qdfgx&client_secret=q5hm0x31bm2659rghs9z8cqmzljn15&grant_type=client_credentials"
  apiURL = "/v4/games"
  token = localStorage.getItem('access_token');
  cabecera: any;
  body: any;
  juegos = [] as any;
  

  constructor(private httpClient: HttpClient) { }
  
  public consultaJuego(token: string){
    if (token != null){
      console.log(token);
      this.cabecera = {headers: new HttpHeaders({'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer '+token})};
      this.body = "fields *; limit 1;";
    } else {
      console.log("Error al comprobar el Token. No se ha proporcionado.");
    }
    return this.httpClient.post(this.apiURL, this.body, this.cabecera);
  }

  public getToken(){
    return this.httpClient.post(this.tokenURL, "").subscribe((resp: any) => {
      localStorage.setItem('access_token', resp.access_token);
    });
  }
}
