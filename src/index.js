import "./scss/index.scss";
import "./js/burger.js";
import "./js/search.js";
import "./js/cart.js";
// import "./js/subscribe.js";

import {
    goodsInBasket
} from "./js/goods.js";

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

import {
    initSubscribe
} from "./js/subscribe";

const catalog = document.getElementById('catalog');
const productPage = document.getElementById('product')
const mainPage = document.getElementById('main')
const order = document.getElementById('order')

if (catalog) {
    initCatalog().then(() => {
        goodsInBasket();
    })
}

if (productPage) {
    initProductPage()
}

if (mainPage) {
    initProductMain()
    initSubscribe()
}

if (order) {
    initOrder()
}