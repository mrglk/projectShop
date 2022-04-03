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