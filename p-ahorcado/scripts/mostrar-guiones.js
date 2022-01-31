function mostrarGuiones(palabra) {
    for(var i = 1; i <= 8; i++) {
        document.querySelector(".linea-" + i).style.display = "none";
    }

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".linea-" + i).style.display = "";
    }
}