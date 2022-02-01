function mostrarGuiones(palabra) {
    for(var i = 1; i <= 8; i++) {
        document.querySelector(".linea-" + i).style.display = "none";

        var letras = document.querySelector(".letras");
        while(letras.firstChild) {
            letras.removeChild(letras.firstChild);
        }

        var letrasNo = document.querySelector(".letras-no");
        while(letrasNo.firstChild) {
            letrasNo.removeChild(letrasNo.firstChild);
        }
    }

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".linea-" + i).style.display = "";

        var letras = document.createElement("span");
        letras.classList.add("letra");
        letras.classList.add("letra-" + i);
        document.querySelector(".letras").appendChild(letras);
    }
}