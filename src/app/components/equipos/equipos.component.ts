import { Component, OnInit } from '@angular/core';
import * as icon from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from 'src/app/services/equipo.service';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  faEye = icon.faEye
  faTimes = icon.faTimes

  idEquipo: number
  miembros: number
  nombreEquipo: string
  juego: string
  idCreador: number

  equipos: any

  miembrosEquipo: any

  constructor(private user: UserService, private equipoService: EquipoService) { }

  ngOnInit(): void {
    const id = {
      "id": this.user.id
    }
    this.cargarMisEquipos(id)
  }


  cargarMisEquipos = (id) => {    
      this.equipoService.getEquipos(id).subscribe(
        (response)=>{
          this.equipos = response['equipos']
          console.log(this.equipos);
        }
      )
  }

  verMiembros = (idEquipo, idCreador) => {
    this.idCreador = idCreador
    this.idEquipo = idEquipo
    const id = {
      "idEquipo": idEquipo
    }
    this.equipoService.getMembers(id).subscribe(
      (response) => {
        this.miembrosEquipo = response['miembros']        
      }
    )
  }


  deleteMember = (idMiembro) => {
    const jugador = {
      "idJugador": idMiembro,
      "idEquipo": this.idEquipo
    }
    this.equipoService.deleteMember(jugador).subscribe(
      (response) => {
        document.getElementById('membersCloseModal').click()
        const id = {
          "id": this.user.id
        }
        this.cargarMisEquipos(id)      
      }
    )    
  }

  deleteTeam = () => {
    const id = {
      "idEquipo": this.idEquipo
    }

    this.equipoService.deleteTeam(id).subscribe(
      (response) => {
        document.getElementById('membersCloseModal').click()
        const id = {
          "id": this.user.id
        }
        this.cargarMisEquipos(id) 
      }
    )

  }

  limpiarMiembros = () => {
    this.miembrosEquipo = null
    this.idCreador = null
  }

}
