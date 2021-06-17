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
  faCircle = icon.faCircle

  roles = [
    { name: "Super Administrador" },
    { name: "Administrador" },
    { name: "Jugador" }
  ]
  rolSeleccionado: null

  idUserLogin: number

  formularioNuevoUser: FormGroup
  formularioEditarUser: FormGroup

  usuarios: any[]
  usuarioAux: any[]

  userAux: any

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

    this.formularioEditarUser = this.formBuilder.group({
      id: [''],
      edit_nombre: ['', [Validators.required]],
      edit_apellidos: ['', [Validators.required]],
      edit_diaNacimiento: ['', [Validators.required]],
      edit_mesNacimiento: ['', [Validators.required]],
      edit_anioNacimiento: ['', [Validators.required]],
      edit_email: ['', [Validators.email, Validators.required]],
      edit_nombreUsuario: ['', [Validators.required]],
      edit_password: [''],
      edit_rol: ['']
    })

    this.idUserLogin = this.user.id
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
    this.userAux = this.usuarios[i]
    console.log(this.userAux);

    this.formularioEditarUser.controls['edit_nombre'].setValue(this.userAux.nombre)
    this.formularioEditarUser.controls['edit_apellidos'].setValue(this.userAux.apellidos)
    this.formularioEditarUser.controls['edit_diaNacimiento'].setValue(this.userAux.diaNacimiento)
    this.formularioEditarUser.controls['edit_mesNacimiento'].setValue(this.userAux.mesNacimiento)
    this.formularioEditarUser.controls['edit_anioNacimiento'].setValue(this.userAux.anioNacimiento)
    this.formularioEditarUser.controls['edit_email'].setValue(this.userAux.email)
    this.formularioEditarUser.controls['edit_nombreUsuario'].setValue(this.userAux.nombreUsuario)
    switch (this.userAux.rol) {
      case 1:
        document.getElementById('superAdmin').setAttribute("selected", "selected");
        break;
      case 2:
        document.getElementById('admin').setAttribute("selected", "selected");
        break;
      case 3:
        document.getElementById('jugador').setAttribute("selected", "selected");
        break;
    }
  }

  limpiarRol = () => {
    document.getElementById('superAdmin').removeAttribute("selected");
    document.getElementById('admin').removeAttribute("selected");
    document.getElementById('jugador').removeAttribute("selected");
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
        this.getUsers()
        this.formularioNuevoUser.reset()
        document.getElementById('btn-cerrar-create').click()
      }
    )
  }

  editUser = () => {
    const usuarioEditar = this.formularioEditarUser.value

    usuarioEditar.id = this.usuarios[this.indiceSeleccionado].id

    if (usuarioEditar.edit_nombre == "") {
      usuarioEditar.edit_nombre = this.usuarios[this.indiceSeleccionado].nombre
    }

    if (usuarioEditar.edit_apellidos == "") {
      usuarioEditar.edit_apellidos = this.usuarios[this.indiceSeleccionado].apellidos
    }

    if (usuarioEditar.edit_diaNacimiento == "") {
      usuarioEditar.edit_diaNacimiento = this.usuarios[this.indiceSeleccionado].diaNacimiento
    }

    if (usuarioEditar.edit_mesNacimiento == "") {
      usuarioEditar.edit_mesNacimiento = this.usuarios[this.indiceSeleccionado].mesNacimiento
    }

    if (usuarioEditar.edit_anioNacimiento == "") {
      usuarioEditar.edit_anioNacimiento = this.usuarios[this.indiceSeleccionado].anioNacimiento
    }

    if (usuarioEditar.edit_email == "") {
      usuarioEditar.edit_email = this.usuarios[this.indiceSeleccionado].email
    }

    usuarioEditar.edit_rol = this.comprobarRol((<HTMLInputElement>document.getElementById('selectRol')).value)

    if(usuarioEditar.edit_password == "") {
      usuarioEditar.edit_password = null
    }

    console.log(usuarioEditar);
    

    this.admin.editUser(usuarioEditar).subscribe(
      (response) => {
        console.log(response);
        
        this.limpiarRol()
        this.formularioEditarUser.reset()
        document.getElementById('btn-cerrar-edit').click()
        this.getUsers()
      }
    )
    

  }

  comprobarRol = (value) => {
    let rol
    
    switch (value) {
      case "Super Administrador":
        rol = 1
        break;
      case "Administrador":
        rol = 2
        break;
      case "Jugador":
        rol = 3
        break;
    }
    return rol
  }

}
