var palabra;

function iniciarJuego(){
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "flex";

    document.querySelector("canvas").style.display = "";
    document.querySelector(".entrada-juego").style.display = "";
    document.querySelector(".mensaje").style.display = "none";

    palabra = escogerPalabra();
    errores = 0;
    lUsadas = [];
    finJuego = false;
    ganaste = 0;
    mensaje = "";

    limpiar();

    mostrarGuiones(palabra);

    console.log(palabra);
}