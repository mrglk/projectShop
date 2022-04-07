import {
    getProducts
} from "./getProducts";

const categoriesLinks = document.querySelectorAll(".categories__link");

export function initProductMain() {

    getProducts().then(data => {
        randomCardsForMain(data);

        categoriesLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                window.location.href = `catalog.html?group=${link.innerText.toLowerCase()}`;
            })
        });
    });
}

function createCardForMain(item) {
    return ` <div class="ourFavorites__item">
    <a href="./product.html?id=${item.id}" class="ourFavorites__productLink">
        <div class="ourFavorites__product">
            <div class="ourFavorites__imgWrapper">
                <img class="ourFavorites__img" src="./uploads/${item.image}" alt="Rings">
            </div>
            <p class="ourFavorites__name">${item.name}</p>
            <p class="ourFavorites__price">${item.price}$</p>
        </div>
    </a>
</div>`;
};

function randomCardsForMain(products) {
    const line1 = document.querySelector(".ourFavorites__line1");
    const line2 = document.querySelector(".ourFavorites__line2");
    line1.innerHTML = "";
    line2.innerHTML = "";
    const count = products.length - 1;

    for (let i = 0; i < 2; i++) {
        line1.innerHTML += createCardForMain(products[Math.round(Math.random() * count) + 1])
    }

    line2.innerHTML = createCardForMain(products[Math.round(Math.random() * count) + 1])
};

let subscribeButton = document.querySelector('.subscribe__button');
subscribeButton.onclick = function (e) {
    e.preventDefault();
    let emailInput = document.querySelector('.subscribe__formField');
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    document.querySelector('.subscribe__message').innerHTML = "";
    if (pattern.test(emailInput.value) == true) {
        document.querySelector('.subscribe__message').innerHTML = "Thank you! You're successfully subscribed";
        sendForm();
    } else {
        document.querySelector('.subscribe__message').innerHTML = "Please provide valid email!"
    }
}

let sendForm = () => {
    let json = {
        email: document.querySelector('.subscribe__formField'),
        subscription: true,
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