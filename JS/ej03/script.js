const contenidoDiv = document.getElementById("contenido");

setInterval(() => {
    const fecha = new Date();
    contenidoDiv.textContent = "Hora actual: " + fecha.toLocaleTimeString();
}, 1000); 
