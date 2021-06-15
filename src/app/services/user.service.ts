import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoged: boolean

  //Datos del usuario logueado
  public static readonly SESSION_STORAGE_USER: string = 'GLITCHGAMING_USER';
  public static readonly SESSION_STORAGE_TOKEN: string = 'GLITCHGAMING_KEY';
  id: number
  nombre: string
  apellidos: string
  edad: number
  email: string
  password: string
  nombreUsuario: string
  access_token: any
  descripcion: string
  pais: string
  estado: number
  verificado: number
  rol: number


  constructor(private http: HttpClient) {

    if (sessionStorage.getItem(UserService.SESSION_STORAGE_USER)) {
      var user = JSON.parse(sessionStorage.getItem(UserService.SESSION_STORAGE_USER));
      this.set(user);
    }

  }

  register = (user: any) => {
    const url = environment.url_api + 'register';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, user, extra);
  }

  login = (user: any) => {

    const url = environment.url_api + 'login';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, user, extra);
  }

  logOut =  () => {
    this.isLoged = false
    const url = `${environment.url_api}logout`;
    const extra = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
       'X-Requested-With': 'XMLHttpRequest' ,
       'Authorization' : 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)}),
    };
    return this.http.post(url,'',extra);
  }

  editarEmail = (user: any) => {

    const url = environment.url_api + 'editEmail';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
      }),
    };
    return this.http.post(url, user, extra);
  }

  editarUsername = (user: any) => {

    const url = environment.url_api + 'editUsername';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
      }),
    };
    return this.http.post(url, user, extra);
  }

  editarPassword = (user: any) => {

    const url = environment.url_api + 'editPassword';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
      }),
    };
    return this.http.post(url, user, extra);
  }

  editarDescription = (user: any) => {
    const url = environment.url_api + 'editDescription';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization' : 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
      }),
    };
    return this.http.post(url, user, extra);
  }

  set = (response: any) => {
    console.log(response);
    if (sessionStorage.getItem(UserService.SESSION_STORAGE_USER)) {
      const user = JSON.parse(sessionStorage.getItem(UserService.SESSION_STORAGE_USER));
      if (!response.hasOwnProperty('id')) response.id = user.id;
      if (!response.hasOwnProperty('nombre')) response.nombre = user.nombre;
      if (!response.hasOwnProperty('apellidos')) response.apellidos = user.apellidos;
      if (!response.hasOwnProperty('edad')) response.edad = user.edad;
      if (!response.hasOwnProperty('email')) response.email = user.email;
      if (!response.hasOwnProperty('rol')) response.rol = user.rol;
      if (!response.hasOwnProperty('password')) response.password = user.password;
      if (!response.hasOwnProperty('pais')) response.pais = user.pais;
      if (!response.hasOwnProperty('nombreUsuario')) response.nombreUsuario = user.nombreUsuario;
      if (!response.hasOwnProperty('estado')) response.estado = user.estado;
      if (!response.hasOwnProperty('verificado')) response.verificado = user.verificado;
      if (!response.hasOwnProperty('descripcion')) response.descripcion = user.descripcion;
    }

    this.id = response.id;
    this.nombre = response.nombre;
    this.apellidos = response.apellidos;
    this.edad = response.edad;
    this.email = response.email;
    this.password = response.password;
    this.pais = response.pais;
    this.nombreUsuario = response.nombreUsuario;
    this.access_token = response.access_token;
    this.estado = response.estado;
    this.verificado = response.verificado;
    this.descripcion = response.descripcion;
    this.rol = response.rol;
    if (response.hasOwnProperty('access_token')) {
      // console.log(this.access_token);
      this.access_token = response.acces_token;
      sessionStorage.setItem(UserService.SESSION_STORAGE_TOKEN, response.access_token);
    }
    sessionStorage.setItem(UserService.SESSION_STORAGE_USER, JSON.stringify(response));
  }
}
