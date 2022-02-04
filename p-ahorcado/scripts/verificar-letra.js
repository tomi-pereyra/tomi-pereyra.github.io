var finJuego = false;
var ganaste = 0;
var mensaje = "";
var colorMensaje;
var letrasErrores;

function vLetra(letra) {
    var esta = false;

    if(lUsadas.indexOf(letra) == -1) {
        lUsadas.push(letra);
    
        for(var i = 0; i < palabra.length; i++) {
            if(letra == palabra[i]) {
                dLetraCorrecta(letra, i + 1);
                ganaste++;
                esta = true;
            }
    
            if(ganaste == palabra.length) {
                finJuego = true;
                mensaje = "Ganaste, felicidades. La palabra era: " + palabra;
                colorMensaje = "green";
                vFin();
            }
        }
        if(!esta) {
            if(letrasErrores.indexOf(letra) == -1) {
                errores++;
                letrasErrores.push(letra);
                dLetraIncorrecta(letra);
                if(dHorca(errores) == false) {
                    finJuego = true;
                    mensaje = "Perdiste, lo siento. La palabra era: " + palabra;
                    colorMensaje = "red";
                    vFin();
                }
            }
        }
        return esta;
    }
}

function vGanaste() {
    
}