import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserService } from 'src/app/services/user.service';
import * as icon from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {

  faAddSquare = icon.faPlusSquare
  faTrash = icon.faTrashAlt
  faPencil = icon.faPencilAlt

  roles = [
    { name: "Super Administrador" },
    { name: "Administrador" },
    { name: "Jugador" }
  ]
  rolSeleccionado: null

  formularioNuevoUser: FormGroup

  usuarios: any[]

  usuarioAux: any[]
  nombreUsuarioAux: string

  indiceSeleccionado: number

  constructor(private router: Router, public user: UserService, private admin: AdminServiceService, private formBuilder: FormBuilder) {
    this.formularioNuevoUser = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      diaNacimiento: ['', [Validators.required]],
      mesNacimiento: ['', [Validators.required]],
      anioNacimiento: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers = () => {
    this.admin.getUsers().subscribe(
      (response) => {
        this.usuarios = response['listaUsuarios']
      }
    )
  }

  seleccionarUsuario = (i) => {
    this.indiceSeleccionado = i
    this.nombreUsuarioAux = this.usuarios[i]['nombreUsuario']
  }

  deleteUser = () => {
    let usuarioAux = this.usuarios[this.indiceSeleccionado]
    console.log(usuarioAux)
    this.admin.deleteUser(usuarioAux).subscribe(
      (response) => {
        this.getUsers()
      }
    )

  }

  newUser = () => {
    const newUser = this.formularioNuevoUser.value
    this.admin.newUser(newUser).subscribe(
      (response) => {
        console.log(response);
        this.getUsers()
      }
    )
  }

}
