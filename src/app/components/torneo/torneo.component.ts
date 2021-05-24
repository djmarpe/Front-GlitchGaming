import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/services/torneo.service';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.scss']
})
export class TorneoComponent implements OnInit {


  //Ultimos torneos
  id: number
  idJuego: number
  diaFin: number
  mesFin: number
  anioFin: number
  diaComienzo: number
  mesComienzo: number
  anioComienzo: number
  equiposInscritos: number
  premio: number
  ultimo: number
  torneos: any[]

  constructor(public torneo: TorneoService) { }

  ngOnInit(): void {
    this.cargarUltimosTorneos();
  }

  //Funcion que carga los ultimos torneos publicados
  cargarUltimosTorneos = () => {
    this.torneo.getUltimosTorneos().subscribe(
      (response) => {
        this.torneos = response['ultimosTorneos'];
      }
    )
  }

}
