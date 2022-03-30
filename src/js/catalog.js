import { getProducts } from "./getProducts";

const buttonJewelry = document.querySelector(".js-filterJewelry");
const buttonHandbags = document.querySelector(".js-filterHandbags");
const buttonSweaters = document.querySelector(".js-filterSweaters");
const buttonEyewear = document.querySelector(".js-filterEyewear");
const buttonShirts = document.querySelector(".js-filterShirts");

const filterLinks = document.querySelectorAll('.catalogHeader__link');




getProducts().then(data => {

    renderCardsForCatalog(data);


    // buttonJewelry.addEventListener("click", function(event){
    //     event.preventDefault()
    //     renderCardsForCatalog(filterCatalog("jewelry", data));
    // });

    // buttonHandbags.addEventListener("click", function(event){
    //     event.preventDefault()
    //     renderCardsForCatalog(filterCatalog("handbags", data));
    // });

    // buttonSweaters.addEventListener("click", function(event){
    //     event.preventDefault()
    //     renderCardsForCatalog(filterCatalog("sweaters", data));
    // });

    // buttonEyewear.addEventListener("click", function(event){
    //     event.preventDefault()
    //     renderCardsForCatalog(filterCatalog("eyewear", data));
    // });

    // buttonShirts.addEventListener("click", function(event){
    //     event.preventDefault()
    //     renderCardsForCatalog(filterCatalog("shirts", data));
    // });

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
        <a href="./product.html" class="catalog__imgLink">
            <div class="catalog__imgWrapper">
                <img class="catalog__img" src="../uploads/${item.image}" alt="${item.category}">
            </div>
        </a>
    </div>
    <div class="catalog__footer">
        <div class="catalog__description">
            <a href="./product.html" class="catalog__link">
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





{/* <li class="pagination__linkWrapper"><a href="" class="pagination__link"> <img
                                    class="pagination__arrow" src="../img/arrowBack.svg"></a></li>
                        <li class="pagination__linkWrapper pagination__linkWrapper_active"><a href=""
                                class="pagination__link">1</a></li>
                        <li class="pagination__linkWrapper"><a href="" class="pagination__link">2</a></li>
                        <li class="pagination__linkWrapper"><a href="" class="pagination__link">3</a></li>
                        <li class="pagination__linkWrapper"><a href="" class="pagination__link">...</a></li>
                        <li class="pagination__linkWrapper"><a href="" class="pagination__link">5</a></li>
                        <li class="pagination__linkWrapper">
                            <a href="" class="pagination__link"> <img class="pagination__arrow"
                                    src="../img/arrowNext.svg"></a>
                        </li> */}




