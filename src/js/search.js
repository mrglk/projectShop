import { getProducts } from "./getProducts";

let elem = document.getElementById("searchBtn");
elem.onclick = function (e) {
  e.preventDefault();
  let search = document.querySelector(".header__search");
  let clearInput = document.getElementById("searchInput");

  search.classList.toggle("show");
  clearInput.value = "";
};

export function initSearch() {
  document.addEventListener("DOMContentLoaded", function (event) {
    getProducts().then((cards) => {
      createPage(cards);
    });
  });

  function createPage(cards) {
    let cardContent = "";

    for (let card of cards) {
      cardContent += `<div class="catalog__item catalog__hide">
            <div class="catalog__photo">
                <a href="./product.html?id=${card.id}" class="catalog__imgLink">
                    <div class="catalog__imgWrapper">
                        <img class="catalog__img" src="./uploads/${card.image}" alt="${card.category}">
                    </div>
                </a>
            </div>
            <div class="catalog__footer">
                <div class="catalog__description">
                    <a href="./product.html?id=${card.id}" class="catalog__link">
                        <p class="catalog__name">${card.name}</p>
                    </a>
                    <p class="catalog__price">${card.price}$</p>
                </div>
                <div class="catalog__basketWrapper hidden">
                    <div class="catalog__basket">
                        <a href="" class="catalog__basketLink">Add to cart</a>
                        <img class="catalog__icon" src="img/bag.svg" alt="Cart">
                    </div>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("searchContainer").innerHTML = cardContent;

    let url = new URL(window.location.href).searchParams.get("search");
    document.getElementById("searchInput").value = url;
    document.getElementById("SearchOnRequest").innerText = url;
    searchCard();

    function searchCard() {
      let searchInput = document.getElementById("searchInput").value;
      if (searchInput.trim().length == 0) {
        return;
      }
      let cards = document.querySelectorAll(".catalog__item");

      let count = 0;
      cards.forEach((card) => {
        let name = card.querySelector(".catalog__name");

        if (name && name.innerText.includes(searchInput.toLowerCase().trim())) {
          card.classList.remove("catalog__hide");
          document.getElementById("SearchOnRequest").innerText = searchInput;
          count++;
        } else {
          card.classList.add("catalog__hide");
        }
      });
      if (count == 0) {
        document.getElementById("SearchOnRequest").innerText =
          "no items to show";
      }
    }

    document
      .querySelector(".header__searchBtn")
      .addEventListener("click", (e) => {
        e.preventDefault();
        searchCard();
        document.querySelector(".header__search").classList.remove("show");
      });
  }
}
