document.addEventListener('DOMContentLoaded', function () {
  const contenedor = document.querySelector('#resumen__producto__container');

  if (contenedor) {
    fetch('/frontend/public/views/components/resumen_producto.html')      
    .then(response => response.text())
      .then(data => {
        contenedor.innerHTML = data;
      })
      .catch(error => console.error('Error cargando resumen-producto:', error));
  }
});
