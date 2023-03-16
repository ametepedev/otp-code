const OTPinputs = document.querySelectorAll("input"),
    SubmitBtn = document.querySelector('.otp-submit-btn');

OTPinputs.forEach((input,i) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input;
        const prevInput = input.previousElementSibling;
        const nextInput = input.nextElementSibling;

        //nextElementSibling et previousElementSibling //est une propriete js qui permet  d'acceder a l'element frere d'un element donne
        

        //LES CONDITIONS POUR CONTROLER NOTRE OTP
        //Si la longueur de l'entree est superieure a un caractere, la valeur sera supprimee
        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }

        //Si le champ suivant est desactive et que la valeur de l'entree actuelle n'est pas vide alors le second champ sera active en lui donnant un focus
        if(nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== ""){
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        }

        //Si la touche supprime est enfoncee, tous les champs precedents sont desactive et la valeur de l'entree actuelle doit etre vide
        if(e.key == 'Backspace'){
            OTPinputs.forEach((input,ii) => {
                if(i <= ii && prevInput){
                    input.setAttribute('disabled', true);
                    currentInput.value == "";
                    prevInput.focus();
                }
            });
        }

        //Si le dernier champ n'est pas desactive ou vide, le bouton de soumission est active
        if(!OTPinputs[3].disabled && OTPinputs[3].value !== ""){
            SubmitBtn.classList.add("active");
            return;
        }
        SubmitBtn.classList.remove("active");

    });
});

//Enfin, lors du chargement de la page, le focus doit etre mis sur le premier input
window.addEventListener("load", () => OTPinputs[0].focus());