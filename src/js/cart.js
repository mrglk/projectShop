import {
    getProducts
} from "./getProducts";

export function initCart() {
    document.addEventListener("DOMContentLoaded", function (event) {
        getProducts().then((goods) => {
            createBasket(goods);
        })
    });
    
    function createBasket(goods) {
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
                console.log(productCards);
                localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
                document.getElementById("countCart").innerHTML = productCards.size;
            })
        });
    
        let itemContent = "";
    
        for (let item of goods) {
            if (productCards.has(`${item.name}`)) {
                itemContent +=
                    `<div class="catalog__item productContainer">
                    <div class="catalog__photo productImg">
                        <a href="./product.html?id=${item.id}" class="catalog__imgLink">
                            <div class="catalog__imgWrapper">
                                <img class="catalog__img" src="./uploads/${item.image}" alt="${item.category}">
                            </div>
                        </a>
                    </div>
                    <div class="productAbout">
                        <div class="productName">
                            <a href="./product.html?id=${item.id}" class="catalog__link">
                                <p class="catalog__name">${item.name}</p>
                            </a>
                            <div class="productDelete">delete</div>
                        </div>
                        <div class="productSize">${productCards.get(item.name).size}</div>
                        <div class="productCount">
                            <div class="productCountBt">
                                <button class="buttonCountMinus countBt">-</button>
                                <div class="buttonCountNumber">${productCards.get(item.name).numb}</div>
                                <button class="buttonCountPlus countBt">+</button>
                            </div>
                            <div class="hiddenContent"><span class="hiddenPrice">${item.price}</span>$</div>
                            <div class="fontResultMul"><span class="resultMul">${item.price*productCards.get(item.name).numb}</span>$</div>
                            </div>
                        </div>
                    </div>
                </div><br>`
                document.querySelector(".pageContentCart").classList.add("basketContentHide");
            }
        }
    
        document.getElementById("basketContainer").innerHTML = itemContent;
    
        let containers = document.querySelectorAll(".productContainer");
        let sum = 0;
        let costSumElem = document.getElementById("costSum");
        let costTotalElem = document.getElementById("costTotal");
    
        containers.forEach(container => {
            let buttonCountPlus = container.querySelector(".buttonCountPlus");
            let buttonCountMinus = container.querySelector(".buttonCountMinus");
            let countElem = container.querySelector(".buttonCountNumber");
            let result = container.querySelector(".resultMul");
            let price = Number(container.querySelector(".hiddenPrice").innerHTML);
            let name = container.querySelector(".catalog__name").innerHTML;
    
            sum += Number(result.innerHTML);
    
            buttonCountPlus.onclick = function () {
                let count = Number(countElem.innerHTML);
                count++;
                countElem.innerHTML = count;
                result.innerHTML = count * price;
                sum += price;
                costSumElem.innerHTML = sum;
                costTotalElem.innerHTML = sum;
                productCards.get(name).numb = count;
                localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
            }
    
            buttonCountMinus.onclick = function () {
                let count = Number(countElem.innerHTML);
                if (count >= 2) {
                    count--;
                    countElem.innerHTML = count;
                    result.innerHTML = count * price;
                    sum -= price;
                    costSumElem.innerHTML = sum;
                    costTotalElem.innerHTML = sum;
                    productCards.get(name).numb = count;
                    localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
                }
            }
    
            container.querySelector(".productDelete").onclick = function () {
                let cardName = container.querySelector(".catalog__name").innerHTML;
                document.getElementById("basketContainer").removeChild(container);
                productCards.delete(cardName);
                localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
                document.getElementById("countCart").innerHTML = productCards.size;
                sum -= Number(result.innerHTML);
                costSumElem.innerHTML = sum;
                costTotalElem.innerHTML = sum;
            }
        })
    
        costSumElem.innerHTML = sum;
        costTotalElem.innerHTML = sum;
    }
}
