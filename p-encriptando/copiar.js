var btnCopy = document.querySelector("#copiar");
var textArea = document.querySelector("#salida");

btnCopy.addEventListener( "click", () => {
    textArea.select();
    document.execCommand("copy");
});