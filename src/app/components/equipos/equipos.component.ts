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
  loading1: boolean
  loading2: boolean
  loading3: boolean
  loading4: boolean
  loading5: boolean
  loading6: boolean
  loading7: boolean

  code: number
  idEquipo: number
  miembros: number
  nombreEquipo: string
  juego: string
  idCreador: number

  equipos: any
  juegosDisponibles: any

  miembrosEquipo: any

  formUnirseEquipo: FormGroup
  formCrearEquipo: FormGroup

  constructor(public user: UserService, private equipoService: EquipoService, private FormBuilder: FormBuilder) {

    this.formUnirseEquipo = this.FormBuilder.group({
      codigo: ['', [Validators.minLength(6), Validators.maxLength(6), Validators.required]]
    })

    this.formCrearEquipo = this.FormBuilder.group({
      newNombre: ['', [Validators.required]],
      idJuego: ['', [Validators.required]],
      maxPlayers: ['', [Validators.required]],
      idCreador: [this.user.id]
    })

  }

  ngOnInit(): void {
    const id = {
      "id": this.user.id
    }
    this.code = null
    this.cargarMisEquipos(id)
  }


  cargarMisEquipos = (id) => {
    if (this.equipos != null) this.equipos = null
    this.loading1 = true
    this.equipoService.getEquipos(id).subscribe(
      (response) => {
        this.loading1 = false
        this.equipos = response['equipos']
      }
    )
  }

  verMiembros = (idEquipo, idCreador) => {
    this.loading2 = true
    this.idCreador = idCreador
    this.idEquipo = idEquipo
    const id = {
      "idEquipo": idEquipo
    }
    this.equipoService.getMembers(id).subscribe(
      (response) => {
        this.miembrosEquipo = response['miembros']
        this.loading2 = false
      }
    )
  }


  deleteMember = (idMiembro) => {
    const jugador = {
      "idJugador": idMiembro,
      "idEquipo": this.idEquipo
    }
    this.loading3 = true
    this.equipoService.deleteMember(jugador).subscribe(
      (response) => {
        this.loading3 = false
        document.getElementById('membersCloseModal').click()
        const id = {
          "id": this.user.id
        }
        this.cargarMisEquipos(id)
      }
    )
  }

  verCodigoInvitacion = () => {
    this.code = null
    const idEquipo = {
      "idEquipo": this.idEquipo
    }
    this.loading5 = true
    this.equipoService.verCodigoInvitacion(idEquipo).subscribe(
      (response) => {
        this.loading5 = false
        this.code = response['accessCode']
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

  exitTeam = () => {
    const jugador = {
      "idEquipo": this.idEquipo,
      "idJugador": this.user.id
    }
    this.equipoService.exitTeam(jugador).subscribe(
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
    const idEquipo = {
      "idEquipo": this.idEquipo
    }
    this.miembrosEquipo = null
    this.code = null
    this.idCreador = null
    this.equipoService.eliminarCodigoInvitacion(idEquipo).subscribe(
      (response) => {

      }
    )
  }

  unirseEquipo = () => {
    const parametros = {
      "codigo": this.formUnirseEquipo.value.codigo,
      "idJugador": this.user.id
    }
    const id = {
      "id": this.user.id
    }
    
    this.equipoService.unirseEquipo(parametros).subscribe(
      (response) => {
        document.getElementById('cerrarUnirseTeam').click()
        this.cargarMisEquipos(id)
      }
    )
  }

  cargarJuegosDisponibles = () => {
    if (this.juegosDisponibles != null) this.juegosDisponibles = null
    this.loading6 = true
    this.equipoService.getJuegosDisponibles().subscribe(
      (response) => {
        this.loading6 = false
        this.juegosDisponibles = response['juegos']
      }
    )
  }

  crearEquipo = () => {
    this.loading7 = true
    this.equipoService.crearEquipo(this.formCrearEquipo.value).subscribe(
      (response) => {
        this.loading7 = false
        const id = {
          "id": this.user.id
        }
        document.getElementById('cerrarCrearTeam').click()
        this.cargarMisEquipos(id);
      }
    )
  }

}
