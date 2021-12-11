import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as icon from '@fortawesome/free-solid-svg-icons'
import { TorneoService } from 'src/app/services/torneo.service';
import { ThisReceiver } from '@angular/compiler';
import { BracketComponent } from 'src/app/components/bracket/bracket.component';

@Component({
  selector: 'app-lista-torneos',
  templateUrl: './lista-torneos.component.html',
  styleUrls: ['./lista-torneos.component.scss']
})
export class ListaTorneosComponent implements OnInit {

  loading1: boolean
  loading2: boolean
  loading3: boolean
  loading4: number
  loading5: boolean
  loading6: boolean

  idTorneo: number
  idJuego: number
  juego: string
  torneosFinalizados: any[]
  torneosEnCurso: any[]
  torneosProgramados: any[]
  torneoDetalle: any
  reglas: string

  es1vs1: boolean
  pertencezco1vs1: boolean

  token: any

  miEquipo: any
  equipos: any[]

  tipoFase: any[]
  modalidad: any[]

  // Encuentros
  encuentros: any[]

  formularioCrearTorneo: FormGroup

  constructor(private torneoService: TorneoService, private router: Router, public user: UserService, private formBuilder: FormBuilder, private bracket: BracketComponent) {

    this.token = sessionStorage.getItem(UserService.SESSION_STORAGE_TOKEN)

    this.formularioCrearTorneo = this.formBuilder.group({
      idJuego: this.torneoService.idJuego,
      torneo_nombre: ['', [Validators.required]],
      torneo_premio: ['', [Validators.required]],
      dia_fin: ['', [Validators.required]],
      mes_fin: ['', [Validators.required]],
      anio_fin: ['', [Validators.required]],
      dia_comienzo: ['', [Validators.required]],
      mes_comienzo: ['', [Validators.required]],
      anio_comienzo: ['', [Validators.required]],
      max_players: ['', [Validators.required]],
      id_modalidad: [''],
      id_fase1: [''],
      id_fase2: [''],
      id_fase3: [''],
      id_fase4: [''],
      id_fase5: [''],
      id_fase6: [''],
      reglas: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
    this.idJuego = this.torneoService.idJuego
    this.getTorneos()
    this.torneoDetalle = null
  }

  getTorneos = () => {
    if (this.idJuego == undefined) {
      this.router.navigate(['/torneos'])
    } else {
      const idJuego = {
        idJuego: this.idJuego
      }
      this.loading1 = true
      this.loading2 = true
      this.loading3 = true

      this.torneoService.getNombreJuego(idJuego).subscribe(
        (response) => {
          this.juego = response['juego']
        }
      )

      this.torneoService.getTorneosFinalizados(idJuego).subscribe(
        (response) => {
          this.loading1 = false
          this.torneosFinalizados = response['torneosFinalizados']
        }
      )

      this.torneoService.getTorneosEnCurso(idJuego).subscribe(
        (response) => {
          this.loading2 = false
          this.torneosEnCurso = response['torneosEnCurso']
        }
      )

      this.torneoService.getTorneosProgramados(idJuego).subscribe(
        (response) => {
          this.loading3 = false
          this.loading6 = false
          this.torneosProgramados = response['torneosProgramados']
        }
      )
    }
  }

  verDetalles = (idTorneoAux) => {
    this.idTorneo = idTorneoAux
    sessionStorage.setItem('idTorneo',idTorneoAux)
    this.torneoService.idTorneo = this.idTorneo

    this.loading4 = 1
    const idTorneo = {
      idTorneo: idTorneoAux
    }
    this.torneoService.getTorneo(idTorneo).subscribe(
      (response) => {        
        this.loading4 = 0
        this.torneoDetalle = response['torneo']
      }
    )
  }

  inscribirse = () => {
    // console.log('El torneo que se muestra es el: ' + this.idTorneo);

    this.miEquipo = undefined
    this.equipos = undefined

    const params = {
      idJugador: this.user.id,
      idJuego: this.idJuego,
      idTorneo: this.idTorneo
    }

    this.loading5 = true
    this.torneoService.getFullTeam(params).subscribe(
      (response) => {

        if (response['miEquipo'] != undefined) {
          this.miEquipo = response['miEquipo']
        }

        if (response['equipos'] != undefined) {
          this.equipos = response['equipos']
          console.log(this.equipos);
        }
      }
    )

    this.torneoService.pertenezco1vs1(params).subscribe(
      (response) => {
        this.pertencezco1vs1 = response['pertenezco1vs1']
      }
    )

    const param = {
      idTorneo: this.idTorneo
    }  

    this.torneoService.es1vs1(param).subscribe(
      (response) => {
        this.loading5 = false
        this.es1vs1 = response['es1vs1']
      }
    )

  }

  inscribirEquipo = (idEquipo) => {
    const params = {
      idEquipo: idEquipo,
      idTorneo: this.idTorneo
    }
    this.torneoService.inscribirEquipo(params).subscribe(
      (response) => {
        this.loading4 = undefined
        document.getElementById('btn-closeInscripciones').click()
        this.getTorneos()
      }

    )
  }

  inscribirse1vs1 = () => {
    const params = {
      idJugador: this.user.id,
      idTorneo: this.idTorneo
    }
    this.torneoService.inscribir1vs1(params).subscribe(
      (response) => {
        this.loading4 = undefined
        document.getElementById('btn-closeInscripciones').click()
        this.getTorneos()
      }

    )
  }

  obtenerDatosCrearTorneo = () => {
    this.cargarModalidad()
  }

  calcularFases = () => {
    switch (this.juego) {
      case 'Valorant':
        document.getElementById('colocar').innerHTML = ''

        var participantes = (<HTMLInputElement>document.getElementById('torneo_max_players')).value
        if (participantes == '64') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {
              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 6; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')


                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '32') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {
              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 5; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }


                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '16') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 4; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '8') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 3; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '4') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 2; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '2') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 1; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }
        break
      case 'League of Legends':
        document.getElementById('colocar').innerHTML = ''

        var participantes = (<HTMLInputElement>document.getElementById('torneo_max_players')).value
        if (participantes == '64') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {
              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 6; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')


                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '32') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {
              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 5; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }


                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '16') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 4; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '8') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 3; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '4') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 2; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }

        if (participantes == '2') {

          const params = {
            idJuego: this.idJuego
          }
          this.torneoService.getTipo(params).subscribe(
            (response) => {

              this.tipoFase = response['tipoModalidad']

              for (let i = 1; i <= 1; i++) {
                var div = document.createElement('div')
                var p = document.createElement('p')
                var select = document.createElement('select')

                for (let i = 0; i < this.tipoFase.length; i++) {
                  var option = document.createElement('option')
                  option.text = this.tipoFase[i].tipo
                  option.value = this.tipoFase[i].id

                  select.add(option)
                }

                div.classList.add('col-12', 'm-0', 'my-3', 'p-0')
                p.classList.add('my-0', 'h6')
                select.classList.add('form-control')
                select.id = 'fase' + i

                p.innerHTML = 'Fase ' + i

                div.appendChild(p)
                div.appendChild(select)

                document.getElementById('colocar').appendChild(div)
              }
            }
          )
        }
        break
    }
  }

  cargarModalidad = () => {
    const params = {
      idJuego: this.idJuego
    }

    this.torneoService.getModalidad(params).subscribe(
      (response) => {
        this.modalidad = response['modalidad']
        for (let i = 0; i < this.modalidad.length; i++) {
          var option = document.createElement('option')
          option.text = this.modalidad[i].Modalidad
          option.value = this.modalidad[i].id

          document.getElementById('torneo_modalidad').appendChild(option)
        }

      }
    )
  }

  crearTorneo = () => {
    this.formularioCrearTorneo.value.id_modalidad = Number((<HTMLInputElement>document.getElementById('torneo_modalidad')).value)
    if (document.getElementById('fase1') != undefined) {
      this.formularioCrearTorneo.value.id_fase1 = (<HTMLInputElement>document.getElementById('fase1')).value
    }
    if (document.getElementById('fase2') != undefined) {
      this.formularioCrearTorneo.value.id_fase2 = (<HTMLInputElement>document.getElementById('fase2')).value
    }
    if (document.getElementById('fase3') != undefined) {
      this.formularioCrearTorneo.value.id_fase3 = (<HTMLInputElement>document.getElementById('fase3')).value
    }
    if (document.getElementById('fase4') != undefined) {
      this.formularioCrearTorneo.value.id_fase4 = (<HTMLInputElement>document.getElementById('fase4')).value
    }
    if (document.getElementById('fase5') != undefined) {
      this.formularioCrearTorneo.value.id_fase5 = (<HTMLInputElement>document.getElementById('fase5')).value
    }
    if (document.getElementById('fase6') != undefined) {
      this.formularioCrearTorneo.value.id_fase6 = (<HTMLInputElement>document.getElementById('fase6')).value
    }

    console.log(this.formularioCrearTorneo.value);


    this.torneoService.crearTorneo(this.formularioCrearTorneo.value).subscribe(
      (response) => {
        document.getElementById('btn-closeCrear').click()
        this.getTorneos()
      }
    )

  }

  cargarReglas = (idTorneoAux) => {
    const params = {
      idTorneo: idTorneoAux
    }
    this.torneoService.getReglasTorneo(params).subscribe(
      (response) => {
        this.reglas = response['reglas']
      }
    )
    
  }

  limpiarDatos = () => {
    this.es1vs1 = null
    this.pertencezco1vs1 = null
  }

  comenzarTorneo = (idTorneo) => {
    const params = {
      id: idTorneo
    }
    this.loading6 = true
    this.torneoService.comenzarTorneo(params).subscribe(
      (response) => {
        this.getTorneos()
      }
    )
  }

  finalizarTorneo = (idTorneo) => {
    const params = {
      id: idTorneo
    }

    this.torneoService.finalizarTorneo(params).subscribe(
      (response) => {
        this.getTorneos()
      }
    )
  }

  verFases = (idTorneo) => {
    const params = {
      id: idTorneo
    }
    sessionStorage.setItem('idTorneo',idTorneo)
  }
}

