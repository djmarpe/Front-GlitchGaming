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
  window.addEventListener('load', comprobarMedia);
  window.addEventListener('resize', comprobarMedia);