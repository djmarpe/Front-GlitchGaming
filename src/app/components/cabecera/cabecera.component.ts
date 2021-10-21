import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  faUser = icon.faUser;
  faExit = icon.faSignOutAlt

  loged: boolean
  userAux: any

  constructor(private user: UserService, private router: Router) {
    if (sessionStorage.getItem(UserService.SESSION_STORAGE_USER)) {
      this.loged = true
    }
  }

  ngOnInit(): void {
    document.getElementById('menu-icon-close').style.cssText = 'display: none !important'
    // document.getElementById('lista-pc-padre').style.cssText = 'display: none !important'
  }

  //Funciones para el menu
  desplegarMenu = () => {
    document.getElementById('lista-movil-hijo').style.display = "block";

    document.getElementById('menu-icon-open').classList.remove('visible');
    document.getElementById('menu-icon-open').classList.add('oculto');


    document.getElementById('menu-icon-close').style.cssText = '';
    document.getElementById('menu-icon-close').style.cssText = 'display: block !important'
    document.getElementById('menu-icon-close').classList.add('visible');


    document.getElementById('lista-movil-padre').classList.remove('d-none');
    document.getElementById('lista-movil-hijo').classList.remove('contraer');
    document.getElementById('lista-movil-hijo').classList.add('desplegar');
  }

  contraerMenu = () => {
    document.getElementById('lista-movil-hijo').style.display = "none";

    document.getElementById('menu-icon-close').style.cssText = '';
    document.getElementById('menu-icon-close').style.cssText = 'display: none !important'

    document.getElementById('menu-icon-open').classList.remove('oculto');
    document.getElementById('menu-icon-open').classList.add('visible');

    document.getElementById('lista-movil-padre').classList.add('d-none');
    document.getElementById('lista-movil-hijo').classList.remove('desplegar');
    document.getElementById('lista-movil-hijo').classList.add('contraer');
  }

  logOut = () => {
    this.user.logOut().subscribe(
      (response) => {
        this.resetVal()
        this.loged = false
        this.router.navigate(['/home'])
      }
    )
  }

  resetVal = () => {
    this.user.nombre = undefined;
    this.user.apellidos = undefined;
    this.user.edad = undefined;
    this.user.access_token = undefined;
    this.user.id = undefined;
    this.user.nombreUsuario = undefined;
    this.user.password = undefined;
    this.user.descripcion = undefined;
    this.user.pais = undefined;
    this.user.estado = undefined;
    this.user.estado = undefined;
    this.user.verificado = undefined;
    this.user.rol = undefined;

    sessionStorage.removeItem(UserService.SESSION_STORAGE_TOKEN);
    sessionStorage.removeItem(UserService.SESSION_STORAGE_USER);
  }
}