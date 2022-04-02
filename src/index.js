import "./scss/index.scss";
import "./js/burger.js";
import "./js/search.js";

import {
    initCatalog
} from "./js/catalog";
import {
    initProductPage
} from "./js/product";
import {
    initProductMain
} from "./js/mainProducts";
import {
    initOrder
} from "./js/order";


const catalog = document.getElementById('catalog');
const productPage = document.getElementById('product');
const mainPage = document.getElementById('main');
const order = document.getElementById('order');

if (catalog) {
    initCatalog()
}

if (productPage) {
    initProductPage()
}

if (mainPage) {
    initProductMain()
}

if (order) {
    initOrder()
}