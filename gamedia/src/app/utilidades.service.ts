import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {
  tokenURL = "https://id.twitch.tv/oauth2/token?client_id=1d3ja1yolgv4sy0cjqxtnnqy4qdfgx&client_secret=q5hm0x31bm2659rghs9z8cqmzljn15&grant_type=client_credentials"

  constructor(private httpClient: HttpClient) { }

  public getToken() {
    return this.httpClient.post(this.tokenURL, "").subscribe((resp: any) => {
      localStorage.setItem('access_token', resp.access_token);
    });
  }
}