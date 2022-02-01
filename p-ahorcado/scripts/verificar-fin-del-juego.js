function vFin() {
    if(finJuego) {
        document.querySelector("canvas").style.display = "none";
        document.querySelector(".entrada-juego").style.display = "none";
        document.querySelector(".mensaje").style.display = "";
        document.querySelector(".mensaje").textContent = mensaje;
        document.querySelector(".mensaje").style.color = colorMensaje;
    }
}