document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('form-container');

  if (contenedor) {
    fetch('../views/components/form.html')
      .then(res => res.text())
      .then(html => {
        contenedor.innerHTML = html;
      })
      .catch(err => console.error('Error al cargar el formulario:', err));
  }
});