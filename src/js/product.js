
import { getProducts } from "./getProducts";

export function initProductPage() {


// getProducts().then(data => {
    
    
// }); 

console.log(document.location.pathname)




const getProductById = (products, id) => {
    return products.find(product => product.id == id);
};

const createProductCard = (product) => {
    addBreadcrumbsToCategory(product.name);

    const img = document.querySelector(".product__img");
    const name = document.querySelector(".product__name");
    const price = document.querySelector(".product__price");
    const description = document.querySelector(".product__description");
    img.src = `../uploads/${product.image}`;
    name.innerText = product.name;
    price.innerText = product.price;
    description.innerText = product.description;
};
}
