import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient, private user: UserService) { }

  getUsers = () => {
    const url = environment.url_api + 'superAdmin/getUsers';
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN),
      }),
    };
    return this.http.get(url, extra);
  }


  deleteUser = (userAux: any) => {
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'superAdmin/deleteUser', userAux, extra);
  }

  newUser = (newUser: any) => {
    // console.log(newUser);
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)
      }),
    };
    return this.http.post(environment.url_api + 'superAdmin/newUser', newUser, extra);
  }

}
