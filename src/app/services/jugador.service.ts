import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.pre-prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private http: HttpClient) { }

  getPlayerStats = (player: any) => {
    
    const url = environment.url_api + 'juegos/valorant';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, JSON.stringify(player), extra);
  }
}
