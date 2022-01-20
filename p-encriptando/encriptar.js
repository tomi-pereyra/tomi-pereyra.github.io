var botonEncriptar = document.querySelector("#btn-encriptar");
var salida = document.querySelector("#salida");

botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Encriptando");

    var entrada = document.querySelector("#entrada");

    var valorFinal = entrada.value;

    valorFinal = valorFinal.replaceAll('e', 'enter');
    valorFinal = valorFinal.replaceAll('i', 'imes');
    valorFinal = valorFinal.replaceAll('a', 'ai');
    valorFinal = valorFinal.replaceAll('o', 'ober');
    valorFinal = valorFinal.replaceAll('u', 'ufat');

    salida.value = valorFinal;
});