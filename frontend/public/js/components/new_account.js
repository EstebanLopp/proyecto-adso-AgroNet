document.addEventListener("DOMContentLoaded", function() {
    const heroElement = document.querySelector(".loginforgot-container");

    if(heroElement) {
        fetch("/frontend/public/views/components/new__account.html")
        .then(response => response.text())
        .then(data => {
            heroElement.innerHTML = data; 
        })

    .catch(error => console.log("Error al cargar la cuenta", error));
    }
});