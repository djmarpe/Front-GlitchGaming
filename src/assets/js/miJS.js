function comprobarMedia() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      console.log('Mas de 768px');
      document.getElementById('padre').classList.remove('media-movil')
      cargarMediaPC();
    } else {
      console.log('Menos de 768px');
      document.getElementById('padre').classList.remove('media-pc')
      cargarMediaMovil();
    }
  }
  
  function cargarMediaPC() {
    document.getElementById('padre').classList.add('media-pc');
  }
  
  function cargarMediaMovil() {
    document.getElementById('padre').classList.add('media-movil');
  }

window.addEventListener('resize', comprobarMedia);