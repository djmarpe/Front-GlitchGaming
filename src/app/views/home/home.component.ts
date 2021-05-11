import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as icon from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faExclamation = icon.faExclamation;

  inscripciones: number;

  //Formulario de contacto
  homeContact: FormGroup;
  email: string;
  nombre: string;
  asunto: string;
  mensaje: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.homeContact = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      asunto: ['Quiero ser patrocinador', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.inscripciones = 1
  }

  enviarCorreo = () => {
    if(this.homeContact.valid){
      //Enviar 
      console.log('Valido');
      
      this.homeContact.reset();
    }else{
      console.log('No valido');
      
    }
  }

}

function comprobarMediaNoticias() {
  var pos1 = document.getElementById('lol_news_img');
  var posAux = document.getElementById('lol_news_after');

  if (window.matchMedia("(min-width: 768px)").matches) {
    console.log('Mas de 768px');
    pos1.append(posAux.firstElementChild);
    pos1.classList.remove('d-none');
    posAux.classList.add('d-none');
  } else {
    console.log('Menos de 768px');
    posAux.appendChild(pos1.firstChild);
    pos1.classList.add('d-none');
    posAux.classList.remove('d-none');
  }
}
window.addEventListener('load', comprobarMediaNoticias);
window.addEventListener('resize', comprobarMediaNoticias);
