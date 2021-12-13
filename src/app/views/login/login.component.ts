import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as icon from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faEye = icon.faEye
  loading1: boolean

  // Formulario de login
  loginForm: FormGroup
  username: string
  password: string

  // Formulario de registro
  registroForm: FormGroup
  new_name: string  // Nombre
  new_surname: string  // Apellidos
  new_diaNacimiento: number  // Dia nacimiento
  new_mesNacimiento: number  // Mes nacimiento
  new_anioNacimiento: number  // Año nacimiento 
  new_email: string  // Email
  new_username: string  // Nombre de usuario
  new_password: string  // Contraseña

  verCorreo: number

  constructor(private formBuilder: FormBuilder, private router: Router, private user: UserService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.registroForm = this.formBuilder.group({
      new_name: ['', [Validators.required]],
      new_surname: ['', [Validators.required]],
      new_diaNacimiento: ['', [Validators.required]],
      new_mesNacimiento: ['', [Validators.required]],
      new_anioNacimiento: ['', [Validators.required]],
      new_email: ['', [Validators.required]],
      new_username: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    if (this.user.isLoged) {
      this.router.navigate(['/home']);
    }
  }

  iniciarSesion = () => {

    let datos = this.loginForm.value;

    const user = {
      nombreUsuario: datos.username,
      password: datos.password
    };

    this.loading1 = true
    this.user.login(user).subscribe(
      (response) => {
        this.loading1 = false
        this.user.isLoged = true
        this.user.set(response)
        this.router.navigate(['/home']);
      }
    )

  }

  registrar = () => {
    let datos = this.registroForm.value

    const newUser = {
      nombre: datos.new_name,
      apellidos: datos.new_surname,
      diaNacimiento: datos.new_diaNacimiento,
      mesNacimiento: datos.new_mesNacimiento,
      anioNacimiento: datos.new_anioNacimiento,
      email: datos.new_email,
      nombreUsuario: datos.new_username,
      password: datos.new_password
    }

    this.user.register(newUser).subscribe(
      (response) => {
        this.verCorreo = 1
        this.registroForm.reset()
      }
    )

  }

}
