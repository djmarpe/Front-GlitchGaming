import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Formulario de login
  loginForm: FormGroup
  username: string
  password: string

  constructor(private formBuilder: FormBuilder, private router: Router, private user: UserService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  iniciarSesion = () => {

    let datos = this.loginForm.value;
    const user = {
      username: datos.username,
      password: datos.password
    };
    
    this.user.login(user).subscribe(
      (response) => {
        this.user.isLoged = true
        this.user.set(response)
        this.router.navigate(['/perfilPersonal']);
      }
    )

  }

}
