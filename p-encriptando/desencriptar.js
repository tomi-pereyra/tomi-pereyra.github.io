var botonDesencriptar = document.querySelector("#btn-desencriptar");
var salida = document.querySelector("#salida");

botonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Desencriptando");

    var entrada = document.querySelector("#entrada");
    var valorFinal = entrada.value;


    valorFinal = valorFinal.replaceAll('ufat', 'u');
    valorFinal = valorFinal.replaceAll('ober', 'o');
    valorFinal = valorFinal.replaceAll('ai', 'a');
    valorFinal = valorFinal.replaceAll('imes', 'i');
    valorFinal = valorFinal.replaceAll('enter', 'e');

    salida.value = valorFinal;
})