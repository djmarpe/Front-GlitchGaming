import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})

export class NoticiaComponent implements OnInit {

  //Ultimas noticias
  id: number
  idJuego: number
  descripcion: string
  ultima: number

  noticias: any[]
  constructor(public noticia: NoticiaService) { }

  ngOnInit(): void {
    this.cargarUltimasNoticias();
  }

  //Funcion que carga los ultimos torneos publicados
  cargarUltimasNoticias = () => {
    this.noticia.getUltimasNoticias().subscribe(
      (response) => {
        console.log(response);
        this.noticias = response['ultimasNoticias'];
      }
    )
  }

  comprobarMediaNoticias = () => {

    for (let i = 0; i < this.noticias.length; i++) {
      var pos1 = document.getElementById(i + '_news_img');
      var posAux = document.getElementById(i + '_news_after');

      if (window.matchMedia("(min-width: 768px)").matches) {
        pos1.append(posAux.firstElementChild);
        pos1.classList.remove('d-none');
        posAux.classList.add('d-none');
      } else {
        posAux.appendChild(pos1.firstChild);
        pos1.classList.add('d-none');
        posAux.classList.remove('d-none');
      }
    }
    
  }
}