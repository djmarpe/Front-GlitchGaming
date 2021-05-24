import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private http: HttpClient) { }

  getUltimosTorneos = () => {
    const url = environment.url_api + 'ultimosTorneos';
    const extra = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'}),
    };
    return this.http.get(url,extra);
  }
}
