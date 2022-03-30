import { getProducts } from "./getProducts";

const filterLinks = document.querySelectorAll('.catalogHeader__link');

export function initCatalog() {
    

getProducts().then(data => {
    renderCardsForCatalog(data);

    for (let i = 0; i < filterLinks.length; i++) {
        filterLinks[i].addEventListener("click", function(event){
            event.preventDefault()
            renderCardsForCatalog(filterCatalog(filterLinks[i].innerText.toLowerCase(), data));
        });
    };

    
}); 


const createCardForCatalog = (item) => {
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

const renderCardsForCatalog = (products) => {
    const container = document.querySelector(".catalog__items");
    container.innerHTML = '';
    products.forEach(product => {
        container.innerHTML += createCardForCatalog(product);
    })
};

const filterCatalog = (value, products) => {
    addBreadcrumbsToCategory(value);
    return products.filter(
        (product) => {
            return product.category == value;
        }
    );
};

const addBreadcrumbsToCategory = (name) => {
    const container = document.querySelector('.pageCaption');
    container.innerHTML = "";
    container.innerHTML = `<a href="index.html">Home</a>
    <img src="../img/greater.png">
    <a href="catalog.html">Catalog</a>
    <img src="../img/greater.png">
    <span>${name.charAt(0).toUpperCase() + name.slice(1)}</span>`
};



{/* <div class="product__inner container__row">
<div class="product__imgWrapper">
    <img class="product__img" src="../img/product_rings.jpg" alt="Rings">
</div>
<div class="product__about">
    <div class="product__name">
        <p>7 gold bags lari</p>
    </div>
    <div class="product__price">
        <p>490$</p>
        </p>
    </div>
    <div class="product__size">
        <span class="product__span">Size:</span>
        <div class="product__selectWrapper">
            <div class="product__selectArrow"><img src="../img/arrow.svg"></div>
            <select class="product__select">
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
            </select>
        </div>
    </div>
    <div class="product__buttons">
        <button class="product__button">Add to cart</button>
        <button class="product__button">Buy</button>
    </div>
    <div class="product__descriptionWrapper">
        <span class="product__span">Description:</span>
        <p class="product__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nemo iusto, hic expedita
            veritatis
            culpa quibusdam minima, adipisci, odit natus excepturi ipsam similique esse tempore
            explicabo necessitatibus recusandae aliquam dolorem ex.</p>
        <p class="product__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nemo iusto, hic expedita
            veritatis
            culpa quibusdam minima, adipisci, odit natus excepturi ipsam similique esse tempore
            explicabo necessitatibus recusandae aliquam dolorem ex.</p>
    </div>
</div>
</div> */}







const pagination = (products) => {
    const countOfProducts = products.length;
    const countOnOnePage = 9;
    const countOfPages = Math.ceil(countOfProducts / countOnOnePage);

    const container = document.querySelector(".pagination__inner");
    container.innerHTML = "";
    let page = "";

    if (countOfPages < 1) {
        return
    }

    for (let i = 1; i < countOfPages + 1; i++) {
         page += `<li class="pagination__linkWrapper pagination__linkWrapper_active"><a href=""
         class="pagination__link">${i}</a></li>`
    }
    return container.innerHTML += page;
};


}





                    
