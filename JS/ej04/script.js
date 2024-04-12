const nowElements = document.querySelectorAll(".now");

setInterval(() => {
    const fecha = new Date();
    const horaActual = fecha.toLocaleTimeString();

    nowElements.forEach(element => {
        element.textContent = "Hora actual: " + horaActual;
    });
}, 1000); 
