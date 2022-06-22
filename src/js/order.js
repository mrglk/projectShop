import {
    getProducts
} from "./getProducts";

export function initOrder() {
    const checkValidity = () => {
        let validForm = Math.min(checkFill("userEmail"), checkPattern('Email'), checkFill("userName"),
            checkFill("userSurname"), checkFill("userPhone"), checkPattern('Phone'), checkFill("userCountry"),
            checkFill("userCity"), checkFill("userAddress"));

        let message = document.querySelector('.errorMessage');
        if (validForm == true) {
            sendForm();
            
            message.innerHTML = '';
            if (document.getElementById('byCard').checked == true) {
                document.location.href = './uploads/payment/payment.html';
            } else {
                document.querySelector('.container__modal').classList.add('container__modal_visible');
            }
            document.getElementById('form').reset();
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
        let address = document.getElementById('userAddress');
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
        checkVisibility(address);

        if (availability == true) {
            country.disabled = false;
        } else {
            country.value = "Russia";
            country.disabled = true;
        }

        let pickUp = document.getElementById("pick-up");
        city.disabled = pickUp.checked;
        address.disabled = pickUp.checked;
    }

    document.getElementById('international').addEventListener('change', (event) => {
        setVisibility(true, true);
        calcCost(20);
    });

    document.getElementById('standard').addEventListener('change', (event) => {
        setVisibility(true, false);
        calcCost(10);
    });

    document.getElementById('courier').addEventListener('change', (event) => {
        setVisibility(true, false);
        calcCost(20);
    });

    let widjetIsLoad = false;

    document.getElementById('pick-up').addEventListener('change', (event) => {
        setVisibility(true, false);
        calcCost(10);
        if (!widjetIsLoad) {
            window.JCShiptorWidgetPvz.init();
            widjetIsLoad = !widjetIsLoad;
        } else {
            window.JCShiptorWidgetPvz.show();
        }
    });

    document.getElementById('store').addEventListener('change', (event) => {
        setVisibility(false, false);
        calcCost(0);
    });

    let elemShiptorWidget = document.querySelector("#shiptor_widget_pvz");
    elemShiptorWidget.addEventListener("onPvzSelect", function (ce) {

        const setAddress = (id, value) => {
            let element = document.getElementById(id);
            element.value = value;
        }
        setAddress("userCity", ce.detail.prepare_address.administrative_area);
        setAddress("userAddress", ce.detail.address);
    });

    const createPurchaseList = (goods) => {
        let productCardsString = localStorage.getItem("cart");

        if (productCardsString == null) {
            return;
        }
        let productCards = JSON.parse(productCardsString);

        let purchasesList = document.querySelector('.purchasesList');
        let subtotal = 0;

        productCards.forEach(element => {

            let name = element[0];
            let size = element[1].size;
            let numb = element[1].numb;
            let price;
            let image;

            goods.forEach(item => {
                if (item.name == name) {
                    price = item.price;
                    image = item.image;
                }
            });

            let purchase = document.createElement('div');
            purchase.classList.add('purchase');
            purchasesList.append(purchase);

            let purchasePreview = document.createElement('div');
            purchasePreview.classList.add('purchase__preview');
            purchase.append(purchasePreview);

            let purchaseImage = document.createElement('img');
            purchaseImage.classList.add('image');
            purchaseImage.src =  "./uploads/" + image;
            purchasePreview.append(purchaseImage);

            let purchaseDescribtion = document.createElement('div');
            purchaseDescribtion.classList.add('purchase__describtion');
            purchase.append(purchaseDescribtion);

            let describtionText = document.createElement('p');
            describtionText.classList.add('describtionText');
            describtionText.innerHTML = name;
            purchaseDescribtion.append(describtionText);

            let describtionSize = document.createElement('p');
            describtionText.classList.add('size');
            describtionSize.innerHTML = size;
            purchaseDescribtion.append(describtionSize);

            let purchasePrice = document.createElement('div');
            purchasePrice.classList.add('purchase__price');
            purchasePrice.innerHTML = price * numb + "$";
            subtotal += price * numb;
            purchase.append(purchasePrice);

        });

        document.getElementById('subtotal').innerHTML = subtotal;
        document.getElementById('total').innerHTML = subtotal;

    };

    const calcCost = (delivery) => {
        let subtotal = document.getElementById('subtotal').innerHTML;
        let discount = document.getElementById('discount').innerHTML;
        document.getElementById('delivery').innerHTML = delivery;

        let total = document.getElementById('total');
        total.innerHTML = (+subtotal - +discount + +delivery);
    }

    document.querySelector('.discount__button').onclick = function (e) {
        e.preventDefault();
        let discountValue = document.querySelector('.discount__code').value;
        let total = document.getElementById('total').innerHTML;
        let discount = document.getElementById('discount');
        if (discountValue == "minus10" && discount.innerHTML == "") {
            let discountRound = Math.round(total * 0.1);
            document.getElementById('total').innerHTML = total - discountRound;
            discount.innerHTML = discountRound;
        }
    }

    document.addEventListener("DOMContentLoaded", function (event) {
        getProducts().then((goods) => {
            createPurchaseList(goods);
        })
        window._shiptorWidget.load();
    });

    let sendForm = () => {
        let json = {
            name: document.getElementById('userName').value,
            surname: document.getElementById('userSurname').value,
            email: document.getElementById('userEmail').value,
            phoneNumber: document.getElementById('userPhone').value,
            subscription: document.getElementById('newsSubscribtion').checked,
        }

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
        if (localStorage.getItem('cart') == null) {
            document.querySelector('.errorMessage').innerHTML = 'Your cart is empty';
        } else {
            checkValidity();
        }
    };

    const closeModal = document.getElementById('successButton');
    closeModal.addEventListener('click', () => {
        document.querySelector('.container__modal').classList.remove('container__modal_visible');
        localStorage.removeItem('cart');
    });
}