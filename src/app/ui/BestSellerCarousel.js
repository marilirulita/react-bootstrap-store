
/* code for best sellers carouse 
root.innerHTML += `<section class="container-fluid py-3">
<!-- Best seller, camisas -->
<h3 class="my-4 border-bottom">
  <i class="far fa-smile-beam"></i>Varios
</h3>
<div id="products" class="carousel slide px-5" data-ride="carousel">
  <div class="carousel-inner" id="products-inner">
  </div>
  <!-- Left and right controls -->
      <a class="carousel-control-prev justify-content-start" href="#products" data-slide="prev">
        <span class="carousel-control-prev-icon bg-dark p-4"></span>
      </a>
      <a class="carousel-control-next justify-content-end" href="#products" data-slide="next">
        <span class="carousel-control-next-icon bg-dark p-4"></span>
      </a>
</div>
</section>`;

/* primero tengo que saber el screen zise, tengo que dividir mi array de elemento para que queden pares 
// esta variable me indica el numero de slices que tendra el carrusel
let carouselItem = 0;
// esta variable me indica cuantas columnas se tendra cada slice segun el tamano de la screen
let colNum = 0;
// esta variable me dice cuanto deve medir cada columna para que se acomode en el row, muliplos de 12
let colnumsize = 0;
if (screen.width > 1025) {
  colNum = 4;
  colnumsize = 3;
  carouselItem = Math.floor(data.length / 4);
} else if (screen.width > 769) {
  colNum = 3;
  colnumsize = 4;
  carouselItem = Math.floor(data.length / 3);
} else if (screen.width > 481) {
  carouselItem = Math.floor(data.length / 2);
  colNum = 2;
  colnumsize = 6;
} else {
  carouselItem = data.length;
  colnumsize = 12;
  colNum = 1;
}
/* se guarda el elemento div donde iran las slices 
const productsInner = document.getElementById("products-inner");
// este loop creara cada slice dependiendo del tamano de la base de datos y del screen size
let i = 0;
while (i < carouselItem) {
  productsInner.innerHTML += `<div class="carousel-item ${
    i === 0 ? "active" : ""
  }">
  <div class="row" id="product-row-${i}">
  </div>
  </div>`;
  i++;
}
// esta variable es un contador para el slice que se requiere obtener
let slicenum = 0;
// esta variable sigue el conteo de cuantas columnas iran dentro del row
let counter = 0;
// este loop crea cada una de as targetas en su respectiva row con su columna
data.forEach((e, i) => {
  const sliceRow = document.getElementById("product-row-" + slicenum);
  if (sliceRow != null) {
    sliceRow.innerHTML += `<div class="col-${colnumsize}"><div class="card">
    <div class="embed-responsive embed-responsive-1by1">
      <a href="#"><img src="${e.img[0]}" alt="${e.notes}" class="embed-responsive-item"/></a>
    </div>
    <div class="card-body clearfix prod-desc">
      <h4 class="card-title m-0">${e.tittle}</h4>
      <p class="card-text">${e.notes}</p>
      <h5 class="card-text float-right">$${e.price}</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar${i}">
        <span class="btn text-secondary border font-weight-bold" data-toggle="tooltip" title="More">+</span>
      </button>
      <div class="collapse navbar-collapse w-100" id="collapsibleNavbar${i}">
        <ul class="navbar-nav nav-top w-100">
          <li><a href="#" class="px-2 text-nowrap">Agregar a carrito</a></li>
          <li><a href="#" class="px-2 text-nowrap">Enviar un mensaje</a></li>
          <li><a href="#" class="px-2 text-nowrap">Mas Detalles</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>`;
  }
  counter++;
  if (counter >= colNum) {
    counter = 0;
    slicenum++;
  }
});

// code for carousel slides new
root.innerHTML += `<section class="container-fluid py-3">
<h3 class="my-4 border-bottom">
  <i class="far fa-grin-stars"></i>Camisas
</h3>
<div id="new-products" class="carousel slide px-5" data-ride="carousel">
  <div class="carousel-inner" id="new-products-inner">
  </div>
  <!-- Left and right controls -->
  <a class="carousel-control-prev justify-content-start" href="#new-products" data-slide="prev">
    <span class="carousel-control-prev-icon bg-dark p-4"></span>
  </a>
  <a class="carousel-control-next justify-content-end" href="#new-products" data-slide="next">
    <span class="carousel-control-next-icon bg-dark p-4"></span>
  </a>
</div>
</section>`;

const newProductsInner = document.getElementById("new-products-inner");
i = 0;
while (i < carouselItem) {
  newProductsInner.innerHTML += `<div class="carousel-item ${
    i === 0 ? "active" : ""
  }">
  <div class="row" id="new-product-row-${i}">
  </div>
  </div>`;
  i++;
}

slicenum = 0;
counter = 0;
data.forEach((e, i) => {
  const sliceRow = document.getElementById("new-product-row-" + slicenum);
  if (sliceRow != null) {
    sliceRow.innerHTML += `<div class="col-${colnumsize}"><div class="card">
    <div class="embed-responsive embed-responsive-1by1">
      <a href="#"><img src="${e.img[0]}" alt="${e.notes}" class="embed-responsive-item"/></a>
    </div>
    <div class="card-body clearfix prod-desc">
      <h4 class="card-title m-0">${e.tittle}</h4>
      <p class="card-text">${e.notes}</p>
      <h5 class="card-text float-right">$${e.price}</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#new-collapsibleNavbar${i}">
        <span class="btn text-secondary border font-weight-bold" data-toggle="tooltip" title="More">+</span>
      </button>
      <div class="collapse navbar-collapse w-100" id="new-collapsibleNavbar${i}">
        <ul class="navbar-nav nav-top w-100">
          <li><a href="#" class="px-2 text-nowrap">Agregar a carrito</a></li>
          <li><a href="#" class="px-2 text-nowrap">Enviar un mensaje</a></li>
          <li><a href="#" class="px-2 text-nowrap">Mas Detalles</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>`;
  }
  counter++;
  if (counter >= colNum) {
    counter = 0;
    slicenum++;
  }
});

// code for products of month carousel
root.innerHTML += `<section class="container-fluid py-3">
<h3 class="my-4 border-bottom">
  <i class="far fa-smile-wink"></i>Hombre
</h3>
<div id="month-product" class="carousel slide px-5" data-ride="carousel">
  <div class="carousel-inner" id="inner-month-product">
  </div>
  <!-- Left and right controls -->
  <a class="carousel-control-prev justify-content-start" href="#month-product" data-slide="prev">
    <span class="carousel-control-prev-icon bg-dark p-4"></span>
  </a>
  <a class="carousel-control-next justify-content-end" href="#month-product" data-slide="next">
    <span class="carousel-control-next-icon bg-dark p-4"></span>
  </a>
</div>
</section>`;

const innerMonthProduct = document.getElementById("inner-month-product");
i = 0;
while (i < carouselItem) {
  innerMonthProduct.innerHTML += `<div class="carousel-item ${
    i === 0 ? "active" : ""
  }">
  <div class="row" id="month-product-row-${i}">
  </div>
  </div>`;
  i++;
}

slicenum = 0;
counter = 0;
data.forEach((e, i) => {
  const sliceRow = document.getElementById("month-product-row-" + slicenum);
  if (sliceRow != null) {
    sliceRow.innerHTML += `<div class="col-${colnumsize}"><div class="card">
    <div class="embed-responsive embed-responsive-1by1">
      <a href="#"><img src="${e.img[0]}" alt="${e.notes}" class="embed-responsive-item"/></a>
    </div>
    <div class="card-body clearfix prod-desc">
      <h4 class="card-title m-0">${e.tittle}</h4>
      <p class="card-text">${e.notes}</p>
      <h5 class="card-text float-right">$${e.price}</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#month-collapsibleNavbar${i}">
        <span class="btn text-secondary border font-weight-bold" data-toggle="tooltip" title="More">+</span>
      </button>
      <div class="collapse navbar-collapse w-100" id="month-collapsibleNavbar${i}">
        <ul class="navbar-nav nav-top w-100">
          <li><a href="#" class="px-2 text-nowrap">Agregar a carrito</a></li>
          <li><a href="#" class="px-2 text-nowrap">Enviar un mensaje</a></li>
          <li><a href="#" class="px-2 text-nowrap">Mas Detalles</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>`;
  }
  counter++;
  if (counter >= colNum) {
    counter = 0;
    slicenum++;
  }
}); */
