var campoFormName = document.querySelector("#form--name");
campoFormName.addEventListener("DOMFocusIn", movingName);
campoFormName.addEventListener("DOMFocusOut", movingOutName);

function movingName() {
    console.log("funcionando");
    let pForm = document.querySelector("#form--name-p");
    pForm.style.margin = "0 0 40px 0";
    pForm.style.color = "#7f8792";   
    pForm.classList.add('f1');
}

function movingOutName() {
    let pForm = document.querySelector("#form--name-p");
    let inputForm = document.querySelector("#form--name-input").value;
    if(inputForm == false) {
        pForm.style.margin = "0 0 18px 0";
        pForm.style.color = "#464646";
        pForm.classList.remove('f1');
    }
}

var campoFormName = document.querySelector("#form--email");
campoFormName.addEventListener("DOMFocusIn", movingEmail);
campoFormName.addEventListener("DOMFocusOut", movingOutEmail);

function movingEmail() {
    console.log("funcionando");
    let pForm = document.querySelector("#form--email-p");
    pForm.style.margin = "0 0 40px 0";
    pForm.style.color = "#7f8792";   
    pForm.classList.add('f1');
}

function movingOutEmail() {
    let pForm = document.querySelector("#form--email-p");
    let inputForm = document.querySelector("#form--email-input").value;
    if(inputForm == false) {
        pForm.style.margin = "0 0 18px 0";
        pForm.style.color = "#464646";
        pForm.classList.remove('f1');
    }
}

var campoFormName = document.querySelector("#form--text");
campoFormName.addEventListener("DOMFocusIn", movingText);
campoFormName.addEventListener("DOMFocusOut", movingOutText);

function movingText() {
    console.log("funcionando");
    let pForm = document.querySelector("#form--text-p");
    pForm.style.margin = "0 0 40px 0";
    pForm.style.color = "#7f8792";   
    pForm.classList.add('f1');
}

function movingOutText() {
    let pForm = document.querySelector("#form--text-p");
    let inputForm = document.querySelector("#form--text-input").value;
    if(inputForm == false) {
        pForm.style.margin = "0 0 18px 0";
        pForm.style.color = "#464646";
        pForm.classList.remove('f1');
    }
}

var campoFormName = document.querySelector("#form--mensaje");
campoFormName.addEventListener("DOMFocusIn", movingMensaje);
campoFormName.addEventListener("DOMFocusOut", movingOutMensaje);

function movingMensaje() {
    console.log("funcionando");
    let pForm = document.querySelector("#form--mensaje-p");
    pForm.style.margin = "-20px 0 0 0";
    pForm.style.color = "#7f8792";   
    pForm.classList.add('f1');
}

function movingOutMensaje() {
    let pForm = document.querySelector("#form--mensaje-p");
    let inputForm = document.querySelector("#form--mensaje-input").value;
    if(inputForm == false) {
        pForm.style.margin = "0";
        pForm.style.color = "#464646";
        pForm.classList.remove('f1');
    }
}