import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as icon from '@fortawesome/free-solid-svg-icons'
import { JugadorService } from 'src/app/services/jugador.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faExclamation = icon.faExclamation;

  loading1: boolean
  loading2: boolean
  mensajeEnviado: number

  inscripciones: number;

  //Formulario de contacto
  homeContact: FormGroup;
  email: string;
  nombre: string;
  asunto: string;
  mensaje: string;

  //Formulario player stats
  playerStatsForm: FormGroup
  playerAux: string
  rank: string

  constructor(private formBuilder: FormBuilder, private router: Router, private mail: MailService, private jugador: JugadorService) {    

    this.rank = ''

    this.homeContact = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      asunto: ['Quiero ser patrocinador', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });

    this.playerStatsForm = this.formBuilder.group({
      player: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  enviarCorreo = () => {
    this.loading2 = true
    if (this.homeContact.valid) {
      let mailAux = this.homeContact.value
      const mail = {
        nombre: mailAux.nombre,
        de: mailAux.email,
        asunto: mailAux.asunto,
        mensaje: mailAux.mensaje
      }

      this.mail.enviarCorreo(mail).subscribe(
        (response) => {
          this.loading2 = false
          this.mensajeEnviado = 1
        },
        (error) => {
          this.loading2 = false
          this.mensajeEnviado = 2
        }
      )
      this.homeContact.reset();
    }
  }

  consultarStats = () => {
    if(this.playerStatsForm.valid){
      this.playerAux = this.playerStatsForm.value.player
      
      const jugador = {
        "jugador": this.playerAux
      }

      this.loading1 = true

      this.jugador.getPlayerStats(jugador).subscribe(
        (response) => {
          this.loading1 = false
          this.rank = response['rank']
        }
      )
    }
  }
}
