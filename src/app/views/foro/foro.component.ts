import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserService } from 'src/app/services/user.service';
import * as icon from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForoService } from 'src/app/services/foro.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {

  // Preguntas
  idPregunta: number
  usuarioCreador: any //Usuario que ha creado la pregunta
  pregunta: string


  // Respuesta
  idRespuesta: number
  idPregunta_respuesta: number
  usuarioRespuesta: any
  respuesta: string

  preguntas: any
  respuestas: any[]

  constructor(private router: Router, public user: UserService, private admin: AdminServiceService, private formBuilder: FormBuilder, private foro: ForoService) { }

  ngOnInit(): void {
    this.cargarPreguntas()
  }

  cargarPreguntas = () => {
    this.foro.loadPreguntas().subscribe(
      (response) => {
        
        this.preguntas = response['listaPreguntas']
        this.respuestas = this.preguntas.respuestas
        
        this.preguntas.forEach(pregunta => {
          console.log(pregunta.pregunta);
          
        });

      }
    )
  }

  enviarRespuesta = (id) => {
    const respuesta = {
      "idUsuarioRespuesta": this.user.id,
      "idPregunta": id,
      "respuesta": (<HTMLInputElement>document.getElementById('respuesta'+id)).value
    }

    console.log(respuesta);
    

    this.foro.responder(respuesta).subscribe(
      (response) => {
        document.getElementById('respuesta'+id).innerText = ""
        this.cargarPreguntas()
        this.router.navigate(['/foro'])
      }
    )
  }

}
