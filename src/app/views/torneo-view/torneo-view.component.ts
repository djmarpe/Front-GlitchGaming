import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as icon from '@fortawesome/free-solid-svg-icons'
import { TorneoService } from 'src/app/services/torneo.service';

@Component({
  selector: 'app-torneo-view',
  templateUrl: './torneo-view.component.html',
  styleUrls: ['./torneo-view.component.scss']
})
export class TorneoViewComponent implements OnInit {

  juegosDisponibles: any[]

  constructor(private userService: UserService, private torneoService: TorneoService, private router: Router) { }

  ngOnInit(): void {
    this.getJuegosDisponibles()
  }

  getJuegosDisponibles = () => {
    this.torneoService.getJuegosDisponibles().subscribe(
      (response) => {     
        this.juegosDisponibles = response['juegosDisponibles']
      }
    )
  }

  listaTorneo = (idJuego) => {
    this.torneoService.idJuego = idJuego
    this.router.navigate(['/listaTorneos'])
  }
}
