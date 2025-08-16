document.addEventListener("DOMContentLoaded", function () {
  const dropdownContainer = document.querySelector(".lista-desplegable");

  if (dropdownContainer) {
    fetch('/frontend/public/views/components/lista_desplegable.html')
      .then(response => response.text())
      .then(data => {
        dropdownContainer.innerHTML = data;

        const btn = dropdownContainer.querySelector(".dropdown__button");
        const list = dropdownContainer.querySelector(".dropdown__list");
        const items = dropdownContainer.querySelectorAll(".dropdown__item");

        if (btn && list) {
          // Abrir/cerrar al hacer clic en el botón
          btn.addEventListener("click", function (e) {
            e.stopPropagation();
            list.classList.toggle("dropdown__list--show");

            const icon = btn.querySelector(".dropdown__icon");
            if (icon) {
              icon.style.transform = list.classList.contains("dropdown__list--show")
                ? "rotate(180deg)"
                : "rotate(0deg)";
            }
          });

          // Seleccionar un ítem -> cambia el texto del botón
          items.forEach(item => {
            item.addEventListener("click", () => {
              btn.firstChild.textContent = item.textContent; // Cambia el texto
              list.classList.remove("dropdown__list--show"); // Cierra menú
              const icon = btn.querySelector(".dropdown__icon");
              if (icon) icon.style.transform = "rotate(0deg)";
            });
          });

          // Cerrar al hacer clic fuera
          document.addEventListener("click", function (e) {
            if (!dropdownContainer.contains(e.target)) {
              list.classList.remove("dropdown__list--show");
              const icon = btn.querySelector(".dropdown__icon");
              if (icon) icon.style.transform = "rotate(0deg)";
            }
          });
        }
      })
      .catch(error => console.error("Error cargando la lista:", error));
  }
});

