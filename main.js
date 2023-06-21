var campoForm = document.querySelectorAll(".input");

campoForm.forEach(element => {
    element.addEventListener('DOMFocusIn', (e) => {
        let pForm = e.path[0].previousElementSibling;
        if(pForm.id == "form--mensaje-p") {
            pForm.style.margin = "-20px 0 0 0";
            pForm.style.color = "#7f8792";   
            pForm.classList.add('f1');
        }
        else {
            pForm.style.margin = "0 0 40px 0";
            pForm.style.color = "#7f8792";   
            pForm.classList.add('f1');
        }
    });
    element.addEventListener('DOMFocusOut', (e) => {
        let pForm = e.path[0].previousElementSibling;
        let inputForm = e.path[0].value;
        if(!inputForm) {
            pForm.style.margin = "0 0 18px 0";
            pForm.style.color = "#464646";
            pForm.classList.remove('f1');
        }
    });

    element.addEventListener("blur", (input) => {
        let error = input.target;
        console.log(error.parentElement);
        if(error.validity.valid) {
            error.parentElement.classList.remove("input-container--invalid");
        } else {
            error.parentElement.classList.add("input-container--invalid");
        }
    });
});