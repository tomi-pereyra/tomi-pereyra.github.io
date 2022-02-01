function dLetraIncorrecta(letra) {
    var letraNo = document.createElement("span");
    letraNo.classList.add("letra-no");
    letraNo.textContent = letra;
    document.querySelector(".letras-no").appendChild(letraNo);
}