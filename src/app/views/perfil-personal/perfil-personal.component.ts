import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as icon from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-perfil-personal',
  templateUrl: './perfil-personal.component.html',
  styleUrls: ['./perfil-personal.component.scss']
})
export class PerfilPersonalComponent implements OnInit {

  faEye = icon.faEye
  checked: boolean
  modifyEmail: number
  modifyUsername: number
  modifyPassword: number
  modifyDescription: number
  modifyValorant: number
  error: string

  nombre: string
  id: number
  edad: number
  email: string
  username: string
  password: string
  description: string
  valorant: string

  // Formularios
  emailForm: FormGroup
  passwordForm: FormGroup
  usernameForm: FormGroup
  descriptionForm: FormGroup
  valorantForm: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, public user: UserService) {

    this.nombre = this.user.nombre + ' ' + this.user.apellidos
    this.id = this.user.id
    this.edad = this.user.edad
    this.email = this.user.email
    this.username = this.user.nombreUsuario
    this.password = this.user.password
    this.description = this.user.descripcion
    this.valorant = this.user.valorant

    this.emailForm = this.formBuilder.group({
      email: [user.email, [Validators.email, Validators.required]]
    })

    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required]]
    })

    this.usernameForm = this.formBuilder.group({
      username: [user.nombreUsuario, [Validators.required]]
    })

    this.descriptionForm = this.formBuilder.group({
      description: [user.descripcion, [Validators.required]]
    })

    this.valorantForm = this.formBuilder.group({
      valorant: [user.valorant, [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  // Editar email
  editEmail = () => {
    document.getElementById('originalEmail').classList.add('d-none')
    document.getElementById('cancelEmail').classList.remove('d-none')
    document.getElementById('applyEmail').classList.remove('d-none')
    document.getElementById('email').classList.remove('d-none')
  }

  cancelEmail = () => {
    document.getElementById('originalEmail').classList.remove('d-none')
    document.getElementById('cancelEmail').classList.add('d-none')
    document.getElementById('applyEmail').classList.add('d-none')
    document.getElementById('email').classList.add('d-none')
  }

  // Llamada a la API para guardar el Email
  guardarEmail = () => {
    let datos = this.emailForm.value
    const user = {
      id: this.user.id,
      email: datos.email
    }

    this.user.editarEmail(user).subscribe(
      (response) => {
        this.email = user.email
        this.modifyEmail = 1
        this.cancelEmail()

      },
      (error) => {
        this.modifyEmail = 2
        this.error = 'Error al modificar.'
      }
    )

  }

  // Editar descripcion
  editDescription = () => {
    document.getElementById('originalDescription').classList.add('d-none')
    document.getElementById('cancelDescription').classList.remove('d-none')
    document.getElementById('applyDescription').classList.remove('d-none')
    document.getElementById('description').classList.remove('d-none')
  }

  cancelDescription = () => {
    document.getElementById('originalDescription').classList.remove('d-none')
    document.getElementById('cancelDescription').classList.add('d-none')
    document.getElementById('applyDescription').classList.add('d-none')
    document.getElementById('description').classList.add('d-none')
  }

  // Editar Valorant
  editValorant = () => {
    document.getElementById('originalValorant').classList.add('d-none')
    document.getElementById('cancelValorant').classList.remove('d-none')
    document.getElementById('applyValorant').classList.remove('d-none')
    document.getElementById('valorant').classList.remove('d-none')
  }

  cancelValorant = () => {
    document.getElementById('originalValorant').classList.remove('d-none')
    document.getElementById('cancelValorant').classList.add('d-none')
    document.getElementById('applyValorant').classList.add('d-none')
    document.getElementById('valorant').classList.add('d-none')
  }

  guardarValorant = () => {
    let datos = this.valorantForm.value
    const user = {
      id: this.user.id,
      valorant: datos.valorant
    }

    this.user.editarValorant(user).subscribe(
      (response) => {
        this.valorant = user.valorant
        this.modifyValorant = 1
        this.cancelValorant()

      },
      (error) => {
        this.modifyValorant = 2
        this.error = 'Error al modificar.'
      }
    )
  }

  // Llamada a la API para guardar el Email
  guardarDescription = () => {
    let datos = this.descriptionForm.value
    const user = {
      id: this.user.id,
      description: datos.description
    }

    this.user.editarDescription(user).subscribe(
      (response) => {
        this.description = user.description
        this.modifyDescription = 1
        this.cancelDescription()

      },
      (error) => {
        this.modifyDescription = 2
        this.error = 'Error al modificar.'
      }
    )
  }

  // Editar nombre de usuario
  editUsername = () => {
    document.getElementById('originalUsername').classList.add('d-none')
    document.getElementById('cancelUsername').classList.remove('d-none')
    document.getElementById('applyUsername').classList.remove('d-none')
    document.getElementById('username').classList.remove('d-none')
  }

  cancelUsername = () => {
    document.getElementById('originalUsername').classList.remove('d-none')
    document.getElementById('cancelUsername').classList.add('d-none')
    document.getElementById('applyUsername').classList.add('d-none')
    document.getElementById('username').classList.add('d-none')
  }

  guardarUsername = () => {
    let datos = this.usernameForm.value
    const user = {
      id: this.user.id,
      username: datos.username
    }

    this.user.editarUsername(user).subscribe(
      (response) => {
        this.username = user.username
        this.modifyUsername = 1
        this.cancelUsername()
      },
      (error) => {
        this.modifyUsername = 2
        this.error = 'Error al modificar.'
      }
    )
  }

  // Password

  verPassword = () => {
    if (this.checked) {
      document.getElementById('originalPassword').innerText = '**********'
      this.checked = false
    } else {
      document.getElementById('originalPassword').innerText = this.password
      this.checked = true
    }
  }

  editPassword = () => {
    document.getElementById('btnVerPass').classList.add('d-none')
    document.getElementById('cancelPassword').classList.remove('d-none')
    document.getElementById('applyPassword').classList.remove('d-none')
    document.getElementById('password').classList.remove('d-none')
  }

  cancelPassword = () => {
    document.getElementById('btnVerPass').classList.remove('d-none')
    document.getElementById('cancelPassword').classList.add('d-none')
    document.getElementById('applyPassword').classList.add('d-none')
    document.getElementById('password').classList.add('d-none')
  }

  guardarPassword = () => {
    let datos = this.passwordForm.value
    const user = {
      id: this.user.id,
      password: datos.password
    }

    this.user.editarPassword(user).subscribe(
      (response) => {
        this.password = user.password
        this.modifyPassword = 1
        this.cancelPassword()
        this.verPassword()
      },
      (error) => {
        this.modifyPassword = 2
        this.error = 'Error al modificar.'
      }
    )
  }
}