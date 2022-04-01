import {
    getProducts
} from "./getProducts";

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

    let itemContent = "";

    for (let item of goods) {
        if (productCards.has(`${item.name}`)) {
            itemContent +=
                `<div class="catalog__item productContainer">
                <div class="catalog__photo productImg">
                    <a href="./product.html?id=${item.id}" class="catalog__imgLink">
                        <div class="catalog__imgWrapper">
                            <img class="catalog__img" src="../uploads/${item.image}" alt="${item.category}">
                        </div>
                    </a>
                </div>
                <div class="productAbout">
                    <div class="productName">
                        <a href="./product.html?id=${item.id}" class="catalog__link">
                            <p class="catalog__name">${item.name}</p>
                        </a>
                        <div class="productDelete">удалить</div>
                    </div>
                    <div class="productSize">
                        <span>${productCards.get(item.name)}</span>
                    </div>
                    <div class="productCount">
                        <div class="productCountBt">
                            <button class="buttonCountMinus countBt">-</button>
                            <div class="buttonCountNumber">1</div>
                            <button class="buttonCountPlus countBt">+</button>
                        </div>
                        <div class="hiddenContent"><span class="hiddenPrice">${item.price}</span>$</div>
                        <div class="fontResultMul"><span class="resultMul">${item.price}</span>$</div>
                        </div>
                    </div>
                </div>
            </div><br>`
            document.querySelector(".pageContent").classList.add("basketContentHide");
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

        sum += Number(result.innerHTML);

        buttonCountPlus.onclick = function () {
            let count = Number(countElem.innerHTML);
            count++;
            countElem.innerHTML = count;
            result.innerHTML = count * price;
            sum += price;
            costSumElem.innerHTML = sum;
            costTotalElem.innerHTML = sum;
            document.querySelector(".newCheckbox").classList.add("newCheckboxBefore");
            // costTotalElem.innerHTML = addGiftBox(sum);
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
                document.querySelector(".newCheckbox").classList.add("newCheckboxBefore");
                // costTotalElem.innerHTML = addGiftBox(sum);
            }
        }

        container.querySelector(".productDelete").onclick = function () {
            let cardName = container.querySelector(".catalog__name").innerHTML;
            document.getElementById("basketContainer").removeChild(container);
            productCards.delete(cardName, 1);
            localStorage.setItem("cart", JSON.stringify(Array.from(productCards.entries())));
            document.getElementById("countCart").innerHTML = productCards.size;
            sum -= Number(result.innerHTML);
            costSumElem.innerHTML = sum;
            costTotalElem.innerHTML = sum;
        }
    })

    costSumElem.innerHTML = sum;
    costTotalElem.innerHTML = sum;

    // function addGiftBox(sum) {
    //     let input = document.getElementById("gift");

    //     if (input.checked) {
    //         return sum + 10;
    //     } else {
    //         return sum;
    //     }
    // }


    document.querySelector(".newCheckbox").onclick = function () {
        //     costTotalElem.innerHTML = addGiftBox(sum);
        document.querySelector(".newCheckbox").classList.remove("newCheckboxBefore");
        let input = document.getElementById("gift");
        input.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                return costTotalElem.innerHTML = sum + 10;
            } else {
                return costTotalElem.innerHTML = sum;
            }
        })
    }
}