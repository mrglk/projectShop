import { getProducts } from "./getProducts";

const filterLinks = document.querySelectorAll('.catalogHeader__link');

export function initCatalog() {

getProducts().then(data => {
    renderCardsForCatalog(data);

    for (let i = 0; i < filterLinks.length; i++) {
        filterLinks[i].addEventListener("click", function(event){
            event.preventDefault()
            renderCardsForCatalog(filterCatalog(filterLinks[i].innerText.toLowerCase(), data));
        });
    };

    
}); }


function createCardForCatalog(item) {
    return `<div class="catalog__item">
    <div class="catalog__photo">
        <a href="./product.html?id=${item.id}" class="catalog__imgLink">
            <div class="catalog__imgWrapper">
                <img class="catalog__img" src="../uploads/${item.image}" alt="${item.category}">
            </div>
        </a>
    </div>
    <div class="catalog__footer">
        <div class="catalog__description">
            <a href="./product.html?id=${item.id}" class="catalog__link">
                <p class="catalog__name">${item.name}</p>
            </a>
            <p class="catalog__price">${item.price}$</p>
        </div>
        <div class="catalog__basketWrapper hidden">
            <div class="catalog__basket">
            <img class="catalog__icon" src="../img/bag.svg" alt="Cart">
                <a href="" class="catalog__basketLink">Add to cart</a>
            </div>
        </div>
    </div>
</div>`;
};

function renderCardsForCatalog(products) {
    const container = document.querySelector(".catalog__items");
    container.innerHTML = '';
    products.forEach(product => {
        container.innerHTML += createCardForCatalog(product);
    })
};

function filterCatalog(value, products) {
    addBreadcrumbs(value);
    return products.filter(
        (product) => {
            return product.category == value;
        }
    );
};

export function addBreadcrumbs(name) {
    const container = document.querySelector('.pageCaption');
    container.innerHTML = "";
    container.innerHTML = `<a href="index.html">Home</a>
    <img src="../img/greater.png">
    <a href="catalog.html">Catalog</a>
    <img src="../img/greater.png">
    <span>${name.charAt(0).toUpperCase() + name.slice(1)}</span>`
};