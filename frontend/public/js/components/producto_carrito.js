document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor__componente');

  if (contenedor) {
    fetch('/frontend/public/views/components/producto_carrito.html')
      .then(res => res.text())
      .then(html => {
        contenedor.innerHTML = html;
      })
      .catch(err => console.error('Error al cargar el producto:', err));
  }
});