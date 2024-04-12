let contenidoDiv = document.getElementById("contenido");

let colores = ["#DAF7A6", "#FFC300", "#FF5733", "#C70039"];

let indiceColor = 0;

setInterval(() => {
    contenidoDiv.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length; 
}, 1000);

contenidoDiv.textContent = "Hola mundo!";