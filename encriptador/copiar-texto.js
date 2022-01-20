var btnCopy = document.querySelector("#btn-copy");
var textArea = document.querySelector("#msg");

btnCopy.addEventListener( "click", () => {
    textArea.select();
    document.execCommand("copy");
});