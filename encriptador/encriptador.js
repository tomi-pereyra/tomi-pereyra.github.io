
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptar = document.querySelector("#btn-encriptar");
var salida = document.querySelector("#msg");

botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Encriptando");

    var entrada = document.querySelector("#input-texto");

    var valorFinal = entrada.value;

    valorFinal = valorFinal.replaceAll('e', 'enter');
    valorFinal = valorFinal.replaceAll('i', 'imes');
    valorFinal = valorFinal.replaceAll('a', 'ai');
    valorFinal = valorFinal.replaceAll('o', 'ober');
    valorFinal = valorFinal.replaceAll('u', 'ufat');

    salida.value = valorFinal;
});