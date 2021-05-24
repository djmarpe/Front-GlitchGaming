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
  }

  enviarCorreo = () => {
    if (this.homeContact.valid) {
      //Enviar 
      console.log('Valido');

      this.homeContact.reset();
    } else {
      console.log('No valido');

    }
  }
}
