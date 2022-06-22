import { getProducts } from "./getProducts";

const filterLinks = document.querySelectorAll(".catalogHeader__link");
const urlGroupName = window.location.search.replace("?group=", "");
const pagination = document.querySelector(".js-pagination");

export function initCatalog() {
  return getProducts().then((data) => {
    const totalProducts = data.length;
    const productsPerPage = 9;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    let currentPage = 1;
    let offset = 0;

    initPagination(totalProducts, totalPages, productsPerPage);

    if (urlGroupName) {
      pagination.innerHTML = "";
      renderCardsForCatalog(
        filterCatalog(urlGroupName, data).slice(offset, offset + 9)
      );
      filterLinks.forEach((link) => {
        link.classList.toggle(
          "catalogHeader__link_active",
          link.innerHTML.toLowerCase() == urlGroupName
        );
      });
    } else {
      renderCardsForCatalog(data.slice(offset, offset + 9));
    }

    for (let i = 0; i < filterLinks.length; i++) {
      filterLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        filterLinks.forEach((link) => {
          link.classList.remove("catalogHeader__link_active");
        });
        let selectCategory = filterCatalog(
          filterLinks[i].innerText.toLowerCase(),
          data
        );
        initPagination(
          selectCategory.length,
          Math.ceil(selectCategory.length / productsPerPage),
          productsPerPage
        );
        setGetParameter("group", filterLinks[i].innerText.toLowerCase());
        renderCardsForCatalog(selectCategory);
        filterLinks[i].classList.add("catalogHeader__link_active");
      });
    }

    pagination.addEventListener("click", function (e) {
      const element = e.target;

      if (element.classList.contains("js-pagi-number")) {
        const newPage = Number(element.innerText);
        setPage(newPage);
      }
      if (element.classList.contains("js-pagi-next")) {
        element.classList.remove("pagination__link__disabled");
        if (currentPage == totalPages) {
          element.classList.add("pagination__link__disabled");
        } else {
          setPage(currentPage + 1);
        }
      }
      if (element.classList.contains("js-pagi-back")) {
        element.classList.remove("pagination__link__disabled");
        if (currentPage == 1) {
          element.classList.toggle("pagination__link__disabled");
        } else {
          setPage(currentPage - 1);
        }
      }
    });

    function setPage(page) {
      currentPage = page;
      offset = page * productsPerPage;
      renderCardsForCatalog(
        data.slice(
          (currentPage - 1) * productsPerPage,
          (currentPage - 1) * productsPerPage + 9
        )
      );
      window.scrollTo({
        top: document.querySelector(".catalogHeader").offsetTop,
        behavior: "smooth",
      });
      setActivePageClass(currentPage);
    }

    function setActivePageClass(page) {
      const paginationLink = document.querySelectorAll(".pagination__link");
      paginationLink.forEach((link) => {
        link.classList.toggle(
          "pagination__link_active",
          link.innerText == page
        );
      });
    }
  });
}

export function createCardForCatalog(item) {
  return `<div class="catalog__item">
    <div class="catalog__photo">
        <a href="./product.html?id=${item.id}" class="catalog__imgLink">
            <div class="catalog__imgWrapper">
                <img class="catalog__img" src="./uploads/${item.image}" alt="${item.category}">
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
                <img class="catalog__icon" src="img/bag.svg" alt="Cart">
                <a class="catalog__basketLink">Add to cart</a>
            </div>
        </div>
    </div>
</div>`;
}

export function renderCardsForCatalog(products) {
  const container = document.querySelector(".catalog__items");
  container.innerHTML = "";
  products.forEach((product) => {
    container.innerHTML += createCardForCatalog(product);
  });
}

export function filterCatalog(value, products) {
  addBreadcrumbs(value);
  return products.filter((product) => {
    return product.category == value;
  });
}

export function addBreadcrumbs(name) {
  const container = document.querySelector(".pageCaption");
  container.innerHTML = "";
  container.innerHTML = `<a href="index.html">Home</a>
    <img src="./img/greater.png">
    <a href="catalog.html">Catalog</a>
    <img src="./img/greater.png">
    <span>${name.charAt(0).toUpperCase() + name.slice(1)}</span>`;
}

function setGetParameter(prmName, val) {
  const url = new URL(window.location);
  url.searchParams.set(prmName, val);
  history.pushState(null, null, url);
}

function initPagination(totalProd, totalPag, prodPerPage) {
  pagination.innerHTML = "";
  if (totalProd > prodPerPage) {
    pagination.classList.remove("pagination__inner_hidden");
    const arrowBack = `<li class="pagination__link js-pagi-back"><img class="pagination__arrow js-pagi-back"
        src="./img/arrowBack.svg">`;
    const arrowNext = ` <li class="pagination__link js-pagi-next">
        <img class="pagination__arrow js-pagi-next" src="./img/arrowNext.svg">
    </li>`;
    let newLinks = "";

    for (let i = 1; i <= totalPag; i++) {
      newLinks += `<li class="pagination__link js-pagi-number">${i}</li>`;
    }
    pagination.innerHTML += arrowBack;
    pagination.innerHTML += newLinks;
    pagination.innerHTML += arrowNext;

    const paginationLink = document.querySelectorAll(".pagination__link");
    paginationLink.forEach((link) => {
      link.classList.toggle("pagination__link_active", link.innerText == 1);
    });
  } else {
    pagination.classList.add("pagination__inner_hidden");
  }
}
