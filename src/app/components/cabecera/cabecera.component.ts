import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as icon from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  faUser = icon.faUser;

  constructor() { }

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

}