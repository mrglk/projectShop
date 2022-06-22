export function goodsInBasket() {
    let products = document.querySelectorAll(".catalog__item");
    let productCardsString = localStorage.getItem("cart");
    let productCards;

    if (productCardsString == null) {
        productCards = new Map();
    } else {
        productCards = new Map(JSON.parse(productCardsString));
    }
    document.getElementById("countCart").innerHTML = productCards.size;

    products.forEach(product => {
        let iconCart = product.querySelector(".catalog__basket");
        let cardName = product.querySelector(".catalog__name").innerHTML;
        let completeGoods = new Object();

        iconCart.addEventListener("click", (e) => {
            e.preventDefault();
            completeGoods = {
                size: "select size",
                numb: 1
            }
            productCards.set(cardName, completeGoods);
            localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
            document.getElementById("countCart").innerHTML = productCards.size;
        })
    });
}