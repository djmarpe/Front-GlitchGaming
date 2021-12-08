import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneoService } from 'src/app/services/torneo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {

  encuentros: any[]
  ronda1: any[]
  ronda2: any[]
  ronda3: any[]
  ronda4: any[]
  ronda5: any[]
  idTorneo: number

  constructor(private torneoService: TorneoService, public user: UserService) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('idTorneo')){
      this.idTorneo = Number(sessionStorage.getItem('idTorneo'))
    }

    this.ronda1 = null
    this.ronda2 = null
    this.ronda3 = null
    this.ronda4 = null
    this.ronda5 = null

    const params = {
      id: this.idTorneo
    }

    this.verFases(params)

  }

  verFases = (params) => {
    this.torneoService.getFases(params).subscribe(
      (response) => {
        this.encuentros = response['encuentros']
        if (this.encuentros.length == 3) {
          this.ronda1 = this.encuentros[0]
          this.ronda2 = this.encuentros[1]
          this.ronda3 = this.encuentros[2]

          console.log(this.ronda1);
          console.log(this.ronda2);
          console.log(this.ronda3);
        }

      }
    )
  }

  pasarFase = (id_equipo,num_fase_destino) => {
    const params = {
      idEquipo: id_equipo,
      num_fase: num_fase_destino,
      idTorneo: this.torneoService.idTorneo
    }
    this.torneoService.pasarFase(params).subscribe(
      (response) => {

      }
    )
  }

}
