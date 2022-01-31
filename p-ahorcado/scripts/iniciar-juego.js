function iniciarJuego(){
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "flex";

    var palabra = escogerPalabra();

    mostrarGuiones(palabra);

    console.log(palabra);
}