let arrayImagenes = ["img/rojo.png", "img/amarillo.png", "img/azul.png", "img/verde.png", "img/rosa.png"];

document.getElementById("boton").addEventListener("click", () => {
    let contenedor = document.getElementById("contenedor");
    let numImagenes = contenedor.querySelectorAll("img").length;

    if (numImagenes < 5 && numImagenes < arrayImagenes.length) {
        let imagen = document.createElement("img");
        imagen.src = arrayImagenes[numImagenes];
        contenedor.appendChild(imagen);
    } else {
        console.log("Se ha alcanzado el límite de imágenes.");
    }
});

document.getElementById("quitar").addEventListener("click", () => {
    let contenedor = document.getElementById("contenedor");
    let imagenes = contenedor.querySelectorAll("img");

    if (imagenes.length > 0) {
        let posicion = document.getElementById("posicion").value; 
        if (!isNaN(posicion) && posicion >= 1 && posicion <= imagenes.length) {
            contenedor.removeChild(imagenes[posicion - 1]); 
        } else {
            console.log("Por favor ingrese una posición válida.");
        }
    } else {
        console.log("No hay imágenes que eliminar.");
    }
});
