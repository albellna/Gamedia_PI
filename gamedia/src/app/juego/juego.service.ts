import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  apiURL = "/v4/games"
  cabecera: any;
  body: any;

  constructor(private httpClient: HttpClient) { }

  public consultaJuego(token: string, id: string) {
    if (token != null) {
      this.cabecera = { headers: new HttpHeaders({ 'Client-ID': '1d3ja1yolgv4sy0cjqxtnnqy4qdfgx', 'Authorization': 'Bearer ' + token }) };
      this.body = "fields name, summary, cover.url, screenshots.url, videos.video_id, age_ratings.content_descriptions.description, genres.name, dlcs.name, dlcs, first_release_date, involved_companies.company.name, rating, similar_games.*; where id=" + id + ";";
    } else {
      console.log("Error al comprobar el Token. No se ha proporcionado.");
    }
    return this.httpClient.post(this.apiURL, this.body, this.cabecera);
  }
}