import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.pre-prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  getEquipos = (id) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'getEquipos', id, extra);
  }

  getMembers = (id) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'getMembers', id, extra);
  }

  deleteMember = (jugador) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'deleteMember', jugador, extra);
  }

  deleteTeam = (id) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'deleteTeam', id, extra);
  }
}
