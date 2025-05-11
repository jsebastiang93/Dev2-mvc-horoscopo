// controller.js

// Validación del formato DD-MM-AAAA
function validarFecha(fechaStr) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    return regex.test(fechaStr);
}

// Evento de cambio en el input
document.getElementById("fecha").addEventListener("input", function () {
    const fecha = this.value;
    const esValida = validarFecha(fecha);
    toggleBoton(esValida);
});

// Evento de clic en el botón Consultar
document.getElementById("consultar").addEventListener("click", function () {
    const fecha = document.getElementById("fecha").value;

    if (!validarFecha(fecha)) {
        alert("Por favor, ingresa una fecha válida en formato DD-MM-AAAA.");
        return;
    }

    const signo = obtenerSignoZodiacal(fecha);
    const horoscopo = obtenerHoroscopo(signo);
    mostrarHoroscopo(horoscopo);
});
