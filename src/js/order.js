
export function initOrder() {
const checkValidity = () => {
    let validForm = Math.min(checkFill("userEmail"), isEmail(), checkFill("userName"),
        checkFill("userSurname"), checkFill("userPhone"), isPhone(), checkFill("userCountry"),
        checkFill("userCity"), checkFill("userAdress"));

    let message = document.querySelector('.errorMessage');
    if (validForm == true) {
        sendForm();
        document.getElementById('form').reset();
        message.innerHTML = '';
        // добавить окно "заказ оформлен успешно"
    } else {
        message.innerHTML = 'Please provide all required information';
    }
};

const checkFill = (id) => {
    let element = document.getElementById(id);

    if (element.classList.contains('checkout__formField_invalid')) {
        element.classList.remove('checkout__formField_invalid');
        document.getElementById(id + 'Error').style.visibility = 'hidden';
    }
    if (element.parentElement.classList.length == 1) {

        if (!(id == 'userPhone')) {
            element.value.replace(/ +/g, ' ').trim();
        }
        if (element.value == "") {
            element.classList.add('checkout__formField_invalid');
            document.getElementById(id + 'Error').style.visibility = 'visible';
            return false;
        }

    }
    return true;
}

const isEmail = () => {
    let email = document.getElementById('userEmail');
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value);
    if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value) == true) {
        return true;
    } else if (!email.classList.contains('checkout__formField_invalid')) {
        email.classList.add('checkout__formField_invalid');
        document.getElementById('userEmailError').style.visibility = 'visible';
    }
    return false;
};

const isPhone = () => {
    let phone = document.getElementById('userPhone');
    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value) == true) {
        return true;
    } else if (!phone.classList.contains('checkout__formField_invalid')) {
        phone.classList.add('checkout__formField_invalid');
        document.getElementById('userPhoneError').style.visibility = 'visible';
    }
    return false;
};

const inputPhone = document.getElementById('userPhone');
const prefixNumber = (str) => {
    if (str === "7") {
        return "7 (";
    }
    if (str === "8") {
        return "8 (";
    }
    if (str === "9") {
        return "7 (9";
    }
    return "7 (";
};

inputPhone.addEventListener("input", (e) => {
    const value = inputPhone.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    if (inputPhone.value.includes("+8") || inputPhone.value[0] === "8") {
        result = "";
    } else {
        result = "+";
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;
            case 4:
                result += ") ";
                break;
            case 7:
                result += "-";
                break;
            case 9:
                result += "-";
                break;
            default:
                break;
        }
        result += value[i];
    }
    inputPhone.value = result;
});

let sendForm = () => {
    let json = {
        name: document.getElementById('userName').value,
        surname: document.getElementById('userSurname').value,
        email: document.getElementById('userEmail').value,
        phoneNumber: document.getElementById('userPhone').value,
        subscription: document.getElementById('newsSubscribtion').value,
    }

    // console.log(json);

    fetch("https://httpbin.org/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(json)
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log(error));
};

let submitButton = document.querySelector('.submitButton');
submitButton.onclick = function (e) {
    e.preventDefault();
    checkValidity();
};

}