// view.js

/**
 * Muestra el horóscopo en el contenedor y aplica las reglas de visualización.
 * @param {string} texto - Horóscopo con emoji que se mostrará en pantalla.
 */
function mostrarHoroscopo(texto) {
    const contenedor = document.getElementById("horoscopo-container");
    const textoElemento = document.getElementById("horoscopo-text");
    const boton = document.getElementById("consultar");

    // Mostrar horóscopo
    textoElemento.innerHTML = texto;
    contenedor.classList.remove("hidden", "fade-out");
    contenedor.classList.add("visible");

    // Deshabilitar el botón durante 15 segundos
    boton.disabled = true;

    // Esperar 15 segundos antes de hacer fade-out
    setTimeout(() => {
        contenedor.classList.add("fade-out");

        // Al finalizar la animación (3s), ocultar el contenedor y reactivar el botón
        setTimeout(() => {
            contenedor.classList.remove("visible");
            contenedor.classList.add("hidden");
            boton.disabled = false;
        }, 3000); // duración de animación en ms

    }, 15000); // 15 segundos en pantalla
}

/**
 * Habilita o deshabilita el botón según la validez del input.
 * @param {boolean} habilitar - Si se debe habilitar el botón o no.
 */
function toggleBoton(habilitar) {
    const boton = document.getElementById("consultar");
    boton.disabled = !habilitar;
}
