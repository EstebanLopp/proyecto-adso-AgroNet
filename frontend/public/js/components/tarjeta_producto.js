document.addEventListener("DOMContentLoaded", function () {
  const tarjetaContainer = document.querySelector(".producto"); //hora apunta al div correcto

  if (tarjetaContainer) {
    fetch('/frontend/public/views/components/tarjeta_producto.html')
      .then(response => response.text())
      .then(html => {
        tarjetaContainer.innerHTML = html;
      })
      .catch(error => console.error("Error al cargar la tarjeta del producto:", error));
  }
});
