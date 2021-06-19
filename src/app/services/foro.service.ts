import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient, private user: UserService) { }

  loadPreguntas = () => {
    const url = environment.url_api + 'foro/getPreguntas';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.get(url, extra);
  }

  responder = (respuesta: any) => {
    const url = environment.url_api + 'foro/setRespuesta';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
      }),
    };
    return this.http.post(url, respuesta, extra);
  }
}
