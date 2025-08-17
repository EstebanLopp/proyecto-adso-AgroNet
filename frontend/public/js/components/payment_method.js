document.addEventListener('DOMContentLoaded', function () {
  const contenedor = document.querySelector('#payment-method-container'); 

  if (contenedor) {
    fetch('../views/components/payment_method.html') 
      .then(response => response.text())
      .then(data => {
        contenedor.innerHTML = data;
      })
      .catch(error => console.error('Error cargando metodo-pago:', error));
  }
});