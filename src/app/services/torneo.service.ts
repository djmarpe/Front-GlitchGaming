import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.pre-prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  idJuego: number

  constructor(private http: HttpClient) { }

  getUltimosTorneos = () => {
    const url = environment.url_api + 'ultimosTorneos';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.get(url, extra);
  }

  getJuegosDisponibles = () => {
    const url = environment.url_api + 'juegos/juegosDisponibles';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.get(url, extra);
  }

  getTorneosEnCurso = (idJuego) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(environment.url_api + 'juego/getTorneosEnCurso', idJuego, extra);
  }

  getTorneosFinalizados = (idJuego) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(environment.url_api + 'juego/getTorneosFinalizados', idJuego, extra);
  }

  getTorneosProgramados = (idJuego) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(environment.url_api + 'juego/getTorneosProgramados', idJuego, extra);
  }

  getNombreJuego = (idJuego) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(environment.url_api + 'juego/getNombreJuego', idJuego, extra);
  }

  getTorneo = (idtorneo) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(environment.url_api + 'juego/getTorneo', idtorneo, extra);
  }

  getFullTeam = (params) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'getFullTeam', params, extra);
  }

  inscribirEquipo = (params) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'torneo/inscribirEquipo', params, extra);
  }

  getTipo = (params) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'juego/getTipoModalidad', params, extra);
  }

  getModalidad = (params) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'juego/getModalidad', params, extra);
  }

  crearTorneo = (params) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'torneo/crearTorneo', params, extra);
  }

  getReglasTorneo = (params) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'torneo/getReglas', params, extra);
  }

}
