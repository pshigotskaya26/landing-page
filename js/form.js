const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("text-error");

let nameValue = document.getElementById("name");
let emailValue = document.getElementById("email");
let messageValue = document.getElementById("message");

const data = {};

const validateForm = async () => {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        return false;
    }
    else {
        nameValue.value = '';
        emailValue.value = '';
        messageValue.value = '';

        try {
            const response = await fetch(URL, {
                method: 'Post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            console.log('Form data are successfully delivered.')
        }
        catch (error) {
            console.log('Error: ', error.message);
        }
    }
};

const validateName = () => {
    if (nameValue.value.length === 0) {
        nameError.innerHTML = "name's length must be >=3";
        return false;
    }

    if (!nameValue.value.match(/^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/)) {
        nameError.innerHTML = "the 1-th letter must be in Upper case";
        return false;
    }

    nameError.innerHTML = '';
    data.name = nameValue.value;
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
    data.email = emailValue.value;
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
    data.message = messageValue.value;
    return true;
};
