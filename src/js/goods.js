export function goodsInBasket() {
    let products = document.querySelectorAll(".catalog__item");
    let productCardsString = localStorage.getItem("cart");
    let productCards;

    if (productCardsString == null) {
        productCards = new Map();
    } else {
        productCards = new Map(JSON.parse(productCardsString));
    }
    console.log(productCards);
    document.getElementById("countCart").innerHTML = productCards.size;

    products.forEach(product => {
        let iconCart = product.querySelector(".catalog__basketLink");
        let cardName = product.querySelector(".catalog__name").innerHTML;

        iconCart.addEventListener("click", (e) => {
            e.preventDefault();
            productCards.set(cardName, 1);
            console.log(productCards);
            localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
            document.getElementById("countCart").innerHTML = productCards.size;
        })
    });
}