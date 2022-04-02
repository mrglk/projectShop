
export function initOrder() {
const checkValidity = () => {
    let validForm = Math.min(checkFill("userEmail"), checkPattern('Email'), checkFill("userName"),
        checkFill("userSurname"), checkFill("userPhone"), checkPattern('Phone'), checkFill("userCountry"),
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
};

const checkPattern = (id) => {
    let element = document.getElementById('user' + id);
    let message = document.querySelector('.errorMessage' + id);
    message.innerHTML = '';
    let pattern = (id == 'Email') ? /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i :
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (pattern.test(element.value) == true) {
        return true;
    } else if (!element.classList.contains('checkout__formField_invalid')) {
        element.classList.add('checkout__formField_invalid');
        document.getElementById('user' + id + 'Error').style.visibility = 'visible';
        message.innerHTML = id + " doesn't match required format";
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

const setVisibility = (visibility, availability) => {
    let country = document.getElementById('userCountry');
    let city = document.getElementById('userCity');
    let adress = document.getElementById('userAdress');
    country.value = "";

    const checkVisibility = (element) => {
        if (visibility == true) {
            element.parentElement.classList.remove('formField__wrapper_hidden');
        } else {
            element.parentElement.classList.add('formField__wrapper_hidden');
        }
    }

    checkVisibility(country);
    checkVisibility(city);
    checkVisibility(adress);

    if (availability == true) {
        country.disabled = false;
    } else {
        country.value = "Russia";
        country.disabled = true;
    }

    let pickUp = document.getElementById("pick-up");
    city.disabled = pickUp.checked;
    adress.disabled = pickUp.checked;
}

document.getElementById('international').addEventListener('change', (event) => {
    setVisibility(true, true);
});

document.getElementById('standard').addEventListener('change', (event) => {
    setVisibility(true, false);
});

document.getElementById('courier').addEventListener('change', (event) => {
    setVisibility(true, false);
});

let widjetIsLoad = false;

document.getElementById('pick-up').addEventListener('change', (event) => {
    setVisibility(true, false);
    if (!widjetIsLoad) {
        window.JCShiptorWidgetPvz.init();
        widjetIsLoad = !widjetIsLoad;
    } else {
        window.JCShiptorWidgetPvz.show();
    }
});

document.getElementById('store').addEventListener('change', (event) => {
    setVisibility(false, false);
});

let elemShiptorWidget = document.querySelector("#shiptor_widget_pvz");
elemShiptorWidget.addEventListener("onPvzSelect", function (ce) {
    console.log(ce.detail);

    const setAdress = (id, value) => {
        let element = document.getElementById(id);
        element.value = value;
    }
    setAdress("userCity",ce.detail.prepare_address.administrative_area);
    setAdress("userAdress", ce.detail.address);
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

let submitButton = document.getElementById('submitButton');
submitButton.onclick = function (e) {
    e.preventDefault();
    checkValidity();
};

document.addEventListener("DOMContentLoader", function () {
    window._shiptorWidget.load();
});
}
