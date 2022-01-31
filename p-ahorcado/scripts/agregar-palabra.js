function agregarPalabra() {
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "flex"; 
    document.querySelector(".juego").style.display = "none"; 
    
    var btnGuardarEmpezar = document.querySelector(".btn-guardar-empezar");
    btnGuardarEmpezar.addEventListener("click", function(event) {
        var entrada = document.querySelector(".input-palabra-nueva");
        var valor = verificarPalabra(entrada.value);
        if(valor) {
            palabras.push(entrada.value);
            console.log(palabras);
            iniciarJuego();
        }
    });

    var btnCancelar = document.querySelector(".btn-cancelar");
    btnCancelar.addEventListener("click", function(event) {
        document.querySelector(".btns-inicio").style.display = "flex";
        document.querySelector(".palabra-nueva").style.display = "none"; 
        document.querySelector(".juego").style.display = "none";
    })
}