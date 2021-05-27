import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Glitch Gaming';

  ngAfterViewChecked(): void{
    comprobarMedia();
  }

}


function comprobarMedia() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log('Mas de 992px');
    document.getElementById('padre').classList.remove('media-movil')
    cargarMediaPC();
  } else {
    console.log('Menos de 992px');
    document.getElementById('padre').classList.remove('media-pc')
    cargarMediaMovil();
  }
}

function cargarMediaPC() {
  document.getElementById('padre').classList.remove('media-movil');
  document.getElementById('padre').classList.add('media-pc');
}

function cargarMediaMovil() {
  document.getElementById('padre').classList.remove('media-pc');
  document.getElementById('padre').classList.add('media-movil');
}

window.addEventListener('resize', comprobarMedia);
