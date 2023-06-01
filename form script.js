
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailError = document.getElementById('emailError');
var passError = document.getElementById('passError');

email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        emailError.style.display = "block";
        email.focus();
        return false;
    }

    if(password.value.length<9){
        password.style.border ="1px solid red";
        passError.style.display = "block";
        password.focus();
        return false;
    }
}

function emailVerify(){
    if (email.value.length >= 9){
        email.style.border = "1px solid black";
        emailError.style.display = "none";
        return true;
    }
}

function passVerify() {
    if(password.value.length>=9){
        password.style.border ="1px solid black";
        passError.style.display = "none";
        return true;
    }
}