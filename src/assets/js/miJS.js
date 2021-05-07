function comprobarMedia() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        console.log('Mas de 992px');
        //document.getElementById('menu-icon-close').click();
        document.getElementById('lista').classList.remove('desplegar');
        document.getElementById('lista').classList.remove('contraer');
        cargarMediaPC();
        //Carousel pequeño / mediano para PC
        document.getElementById('carousel').classList.add('w-50');
    } else {
        console.log('Menos de 992px');
        document.getElementById('padre').classList.remove('media-pc');
        document.getElementById('lista').classList.add('desplegar');
        cargarMediaMovil();
        //Carousel grande para movil
        document.getElementById('carousel').classList.remove('w-50');
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
window.addEventListener('load', comprobarMedia);
window.addEventListener('resize', comprobarMedia);