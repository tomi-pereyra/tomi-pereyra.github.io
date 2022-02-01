function dHorca(errores) {
    switch(errores) {
        case 1:
            dBase();
            break;
        case 2:
            dMastil();
            break;
        case 3:
            dTravesa();
            break;
        case 4:
            dSoga();
            break;
        case 5:
            dCabeza();
            break;
        case 6:
            dTronco();
            break;
        case 7:
            dPieDerecho();
            break;
        case 8:
            dPieIzquierdo();
            break;
        case 9:
            dManoDerecha();
            break;
        case 10:
            dManoIzquierda();
            return false;
            break;
        default:
            break;
    }
}