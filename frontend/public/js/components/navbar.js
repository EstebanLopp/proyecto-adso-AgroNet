document.addEventListener("DOMContentLoaded", function() {
    const heroElement = document.querySelector(".navbar-container");

    if(heroElement) {
        fetch("/frontend/public/views/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            heroElement.innerHTML = data; 
        })

    .catch(error => console.log("Error al cargar el hero", error));
    }
});