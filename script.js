// script.js
function mostrarDetalles(message) {
    alert(message);
}

document.addEventListener('custom-click', (event) => {
    mostrarDetalles(event.detail.message);
});
