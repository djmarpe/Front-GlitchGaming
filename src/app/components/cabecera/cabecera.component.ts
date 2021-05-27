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

  userAux: any

  constructor(private user: UserService, private router: Router) {
    this.userAux = user
  }

  ngOnInit(): void {
  }

  //Funciones para el menu
  desplegarMenu = () => {
    document.getElementById('lista').style.display = "block";

    document.getElementById('menu-icon-open').classList.remove('visible');
    document.getElementById('menu-icon-open').classList.add('oculto');


    document.getElementById('menu-icon-close').classList.remove('oculto');
    document.getElementById('menu-icon-close').classList.add('visible');


    document.getElementById('lista').classList.remove('contraer');
    document.getElementById('lista').classList.add('desplegar');
  }

  contraerMenu = () => {
    document.getElementById('lista').style.display = "none";

    document.getElementById('menu-icon-close').classList.remove('visible');
    document.getElementById('menu-icon-close').classList.add('oculto');

    document.getElementById('menu-icon-open').classList.remove('oculto');
    document.getElementById('menu-icon-open').classList.add('visible');

    document.getElementById('lista').classList.remove('desplegar');
    document.getElementById('lista').classList.add('contraer');
  }

  logOut = () => {
    this.user.logOut(this.userAux)
    this.router.navigate(['/home']);
  }
}