
import { getProducts } from "./getProducts";
import { addBreadcrumbs } from "./catalog";

export function initProductPage() {
const pageID = window.location.search.replace( '?id=', '');
getProducts().then(data => {
    renderProductCard(getProductById(data, pageID));
}); 
}

function getProductById(products, id) {
    return products.find(product => product.id == id);
};

function renderProductCard (product) {
    addBreadcrumbs(product.name);
    const img = document.querySelector(".product__img");
    const name = document.querySelector(".product__name");
    const price = document.querySelector(".product__price");
    const description = document.querySelector(".product__description");
    const select = document.querySelector(".product__select");
    const selectWrapper = document.querySelector(".product__selectWrapper");
    const oneSize = document.querySelector(".product__oneSize");
    img.src = `../uploads/${product.image}`;
    name.innerText = product.name;
    price.innerText = product.price;
    description.innerText = product.description;

    if (!product.size) {
        selectWrapper.classList.add("product__selectWrapper_hidden");
        oneSize.classList.remove("hidden");
    } else {
        const sizes = product.size;
        sizes.forEach(size => {
            const option = document.createElement("option");
            option.setAttribute("value", size);
            option.innerHTML = size;
            select.appendChild(option);
        });
    };
};