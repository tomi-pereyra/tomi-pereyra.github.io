var finJuego = false;
var ganaste = 0;
var mensaje = "";
var colorMensaje;

function vLetra(letra) {
    var esta = false;

    for(var i = 0; i < palabra.length; i++) {
        if(letra == palabra[i]) {
            dLetraCorrecta(letra, i + 1);
            ganaste++;
        }
        if(lUsadas.indexOf(letra) == -1) {
            if(letra == palabra[i]) {
                dLetraCorrecta(letra, i + 1);
                
                lUsadas.push(letra);
                if(ganaste == palabra.length) {
                    finJuego = true;
                    mensaje = "Ganaste, felicidades.";
                    colorMensaje = "green";
                    vFin();
                }
                esta = true;
            }
        }
    }
    if(!esta) {
        if(lUsadas.indexOf(letra) == -1) {
            errores++;
            dLetraIncorrecta(letra);
            lUsadas.push(letra);
            if(dHorca(errores) == false) {
                finJuego = true;
                mensaje = "Perdiste, lo siento.";
                colorMensaje = "red";
                vFin();
            }
        }
    }
    return esta;
}