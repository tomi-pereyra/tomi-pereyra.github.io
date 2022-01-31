var btnAgregar = document.querySelector(".btn-agregar");
btnAgregar.addEventListener("click", agregarPalabra);

var botonIniciar = document.querySelector(".btn-iniciar");
botonIniciar.addEventListener("click", iniciarJuego);

var botonNuevoJuego = document.querySelector(".btn-nuevojuego");
botonNuevoJuego.addEventListener("click", iniciarJuego);

var botonDesistir = document.querySelector(".btn-desistir");
botonDesistir.addEventListener("click", function() {
    document.querySelector(".btns-inicio").style.display = "flex";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "none";
})