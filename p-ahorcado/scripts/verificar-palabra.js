function verificarPalabra(palabra) {
    if(palabra.length > 8 || palabra.length < 2) {
        return false;
    }
    for(var i = 0; i < palabra.length; i++) {
        switch(palabra[i]) {
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "Ñ":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                continue;
                break;
            default:
                return false;
                break;
        }
    }
    return true;
}