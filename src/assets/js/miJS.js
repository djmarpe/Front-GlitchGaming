function comprobarMedia() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        document.getElementById('carousel').classList.add('w-50');
    } else {
        document.getElementById('carousel').classList.remove('w-50');
    }
}

// function cargarMediaPC() {
//     document.getElementById('lista-pc-padre').classList.remove('d-none')
//     document.getElementById('lista-pc-padre').style.cssText = '';
//     document.getElementById('menu-icon-movil').classList.add('d-none')
// }

// function cargarMediaMovil() {
//     document.getElementById('lista-movil-padre').classList.remove('d-none');
//     document.getElementById('menu-icon-movil').classList.remove('d-none')
// }
window.addEventListener('load', comprobarMedia);
window.addEventListener('resize', comprobarMedia);