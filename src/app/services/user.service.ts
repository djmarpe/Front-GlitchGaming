import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoged: boolean

  //Datos del usuario logueado
  id: number
  nombre: string
  apellidos: string
  edad: number
  email: string
  contra: string
  nombreUsuario: string
  descripcion: string
  pais: string
  estado: number
  verificado: number
  rol: number


  constructor(private http: HttpClient) { }

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

  editarEmail = (user: any) => {
    
    const url = environment.url_api + 'editEmail';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, user, extra);
  }

  editarUsername = (user: any) => {
    
    const url = environment.url_api + 'editUsername';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, user, extra);
  }

  editarPassword = (user: any) => {
    
    const url = environment.url_api + 'editPassword';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, user, extra);
  }

  editarDescription = (user: any) => {
    const url = environment.url_api + 'editDescription';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
    };
    return this.http.post(url, user, extra);
  }

  set = (response: any) => {
    console.log(response);
    this.id = response.id;
    this.nombre = response.nombre;
    this.apellidos = response.apellidos;
    this.edad = response.edad;
    this.email = response.email;
    this.contra = response.contra;
    this.pais = response.pais;
    this.nombreUsuario = response.nombreUsuario;
    this.estado = response.estado;
    this.verificado = response.verificado;
    this.descripcion = response.descripcion;
    this.rol = response.rol;
  }
}
