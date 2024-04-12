let intervalo;
const boton = document.getElementById("boton");
const parar = document.getElementById("parar");
const posponer = document.getElementById("posponer");
const segundosInput = document.getElementById("segundos");
const audio = document.getElementById("audio");

function iniciarIntervalo(segundos) {
    intervalo = setInterval(() => {
        console.log("Tiempo restante:", segundos);
        boton.style.display = "none";
        segundos--;

        if (segundos < 0) {
            clearInterval(intervalo);
            console.log("¡Está sonando la alarma!");
            posponer.style.display = "inline";
            parar.style.display = "inline";
            audio.play();
        }
    }, 1000);
}

boton.addEventListener("click", () => {
    iniciarIntervalo(segundosInput.value);
});

parar.addEventListener("click", () => {
    console.log("Alarma parada");
    audio.pause();
    boton.style.display = "inline";
    parar.style.display = "none";
    posponer.style.display = "none";
    clearInterval(intervalo);
});

posponer.addEventListener("click", () => {
    audio.pause();
    console.log("Alarma pospuesta " + segundosInput.value + " segundos");
    parar.style.display = "none";
    posponer.style.display = "none";
    clearInterval(intervalo);
    iniciarIntervalo(segundosInput.value);
});
