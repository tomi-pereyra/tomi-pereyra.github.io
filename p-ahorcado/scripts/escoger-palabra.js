let palabras = [
    "ALURA",
    "ORACLE",
    "VARIABLE",
    "FUNCION",
    "OBJETO",
    "BOTON",
    "CODIGO",
    "TRELLO",
    "FIGMA",
    "EDITOR",
    "DISEÑO",
    "WEB"
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}