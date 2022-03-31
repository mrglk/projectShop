import "./scss/index.scss";
import "./js/burger.js";
import "./js/search.js";

import { initCatalog } from "./js/catalog";
import { initProductPage } from "./js/product";

const catalog = document.getElementById('catalog');
const productPage = document.getElementById('product')

if (catalog) {
    initCatalog()
}

if (productPage) {
    initProductPage()
}