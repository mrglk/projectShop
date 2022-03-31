import { getProducts } from "./getProducts";

const filterLinks = document.querySelectorAll('.catalogHeader__link');
const urlGroupName = window.location.search.replace( '?group=', '');

export function initCatalog() {
getProducts().then(data => {

    if (urlGroupName) {
        renderCardsForCatalog(filterCatalog(urlGroupName, data));
                filterLinks.forEach(link => {
                    if (link.innerHTML.toLowerCase() == urlGroupName) {
                        link.classList.add("catalogHeader__link_active");
                    }
                })
    } else {
        renderCardsForCatalog(data)
    };

    for (let i = 0; i < filterLinks.length; i++) {
        filterLinks[i].addEventListener("click", function(event){
            event.preventDefault()
            filterLinks.forEach(link => {
                link.classList.remove("catalogHeader__link_active");
        });
        setGetParameter("group", filterLinks[i].innerText.toLowerCase());
        renderCardsForCatalog(filterCatalog(filterLinks[i].innerText.toLowerCase(), data));
        filterLinks[i].classList.add("catalogHeader__link_active");
        });
    };
}); }

export function createCardForCatalog(item) {
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

export function renderCardsForCatalog(products) {
    const container = document.querySelector(".catalog__items");
    container.innerHTML = '';
    products.forEach(product => {
        container.innerHTML += createCardForCatalog(product);
    })
};

export function filterCatalog(value, products) {
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

function setGetParameter(prmName, val) {
    const url = new URL(window.location);
    url.searchParams.set(prmName, val);
    history.pushState(null, null, url);
}