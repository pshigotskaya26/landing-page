const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("text-error");

let nameValue = document.getElementById("name");
let emailValue = document.getElementById("email");
let messageValue = document.getElementById("message");

const validateForm = () => {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        return false;
    }
    else {
        nameValue.value = '';
        emailValue.value = '';
        messageValue.value = '';
        return true;
    }
};

const validateName = () => {
    //let nameValue = document.getElementById("name").value;
    
    if (nameValue.value.length === 0) {
        nameError.innerHTML = "name's length must be >=3";
        return false;
    }

    if (!nameValue.value.match(/^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/)) {
        nameError.innerHTML = "First letter of the name must be in Upper case";
        return false;
    }

    nameError.innerHTML = '';
    return true;
};

const validateEmail = () => {
    if (emailValue.value.length === 0) {
        emailError.innerHTML = "email is required";
        return false;
    }

    if (!emailValue.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'email invalid';
        return false;
    }

    emailError.innerHTML = '';
    return true;
};


const validateMessage = () => {
    if (messageValue.value.length === 0) {
        messageError.innerHTML = "message is required";
        return false;
    }

    if (messageValue.value.length > 20) {
        messageError.innerHTML = "message must be less than 30 letters";
        return false;
    }

    messageError.innerHTML = '';
    return true;
};
