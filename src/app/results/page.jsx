import data from "@/utils/data";
import Image from "next/image";
import Pagination from "../ui/pagination";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../ui/squeletons";

export default function Page({ searchParams }) {
  const query = searchParams?.query || '';
  const lugar = searchParams?.lugar || '';
  const currentPage = Number(searchParams?.page) || 1;

  const offset = currentPage * 6;
  const filteredProduc = data.filter(e => {
    return (e.tittle.toLowerCase().includes(query.toLowerCase()) || e.notes.toLowerCase().includes(query.toLowerCase())) && e.lugar.toLowerCase().includes(lugar.toLowerCase());
  });

  const totalPages = Math.ceil(filteredProduc.length / 6) || 1;
  const categorias = [
    "blusas",
    "camisas",
    "interior",
    "pantalones",
    "sueters",
    "calzado",
    "hogar",
    "otro",
  ];

  const generos = ["bebes", "caballero", "dama", "nina", "nino"];

  const temporada = ["primavera", "verano", "otono", "invierno"];

  /* hace un search en a base de datos por los rangos de precios */
  const priceRange = data.reduce((acc, item) => {
    if (!acc.includes(item.price)) {
      acc.push(item.price);
    }
    return acc;
  }, []);

  return (
    <main className="container-fluid">
      <div class="d-flex flex-column flex-md-row">
        <div class="check-box-div ml-1 mx-lg-5 mr-2 d-flex flex-column flex-sm-row flex-md-column justify-content-between justify-content-md-start">
          <form class="categorias" action="index.html" method="post">
            <h4 class="border-bottom py-2 mt-2">Type</h4>
            {categorias.map((e) => (
              <div key={e} class="d-flex align-items-baseline">
                <input type="checkbox" name={e} value="" />
                <label for={e} class="mx-2">
                  {e}
                </label>
              </div>
            ))}
          </form>
          <form class="genero" action="index.html" method="post">
            <h4 class="border-bottom py-2 mt-2">Genero</h4>
            {generos.map((e) => (
              <div key={e} class="d-flex align-items-baseline">
                <input type="checkbox" name={e} value="" />
                <label for={e} class="mx-2">
                  {e}
                </label>
              </div>
            ))}
          </form>
          <form
            class="price-range"
            action="index.html"
            method="post"
            id="price-range"
          >
            <h4 class="border-bottom py-2 mt-2">Price Range</h4>
            {priceRange.map((e) => (
              <div key={e} class="d-flex align-items-baseline">
                <input type="checkbox" name={e} value="" />
                <label for={e} class="mx-2">
                  ${e}
                </label>
              </div>
            ))}
          </form>
        </div>
        <br />

        <div class="product-search border-top">
          <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
          <div id="product-results">
            <p class="pt-3 pl-3 font-weight-bold">
              {filteredProduc.length} resultados para {query}
            </p>
            {filteredProduc.slice(offset - 6, offset).map((e, i) => (
              <div key={i + "product"} class="d-flex border mb-3">
                <div class="embed-responsive embed-responsive-1by1 d-lg-none">
                  <Image
                    src={e.img[0]}
                    alt={e.notes}
                    width={250}
                    height={250}
                    class="embed-responsive-item p-1 p-md-2 p-lg-3 w-100"
                  />
                </div>
                <Image
                  src={e.img[0]}
                  alt={e.notes}
                  width={300}
                  height={300}
                  class="w-50 p-1 p-md-2 p-lg-3 d-none d-lg-block"
                />
                <div class="w-50 p-1 p-md-2 p-lg-3 mr-lg-5">
                  <h4>{e.tittle}</h4>
                  <p class="d-none d-sm-block">{e.notes}</p>
                  <p class="d-sm-none">{e.notes}</p>
                  <span>
                    <b>Condicion: </b>
                    {e.condition}
                  </span>
                  <div>
                    <span>
                      <b>Lugar: </b>
                      {e.lugar}
                    </span>
                  </div>

                  <form class="form-inline" action="index.html" method="post">
                    <div class="input-group mt-3 mb-3">
                      <button
                        type="button"
                        name="button"
                        class="carousel-buttons buttons"
                      >
                        ${e.price}
                      </button>
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapseResults" + i}
                        aria-expanded="false"
                        aria-controls={"collapseResults" + i}
                      >
                        <span
                          class="btn border text-secondary font-weight-bold"
                          data-toggle="tooltip"
                          title="More"
                        >
                          +
                        </span>
                      </button>

                      <div class="collapse navbar-collapse" id={"collapseResults" + i}>
                      <ul class="navbar-nav nav-drop">
                          <li>
                            <a href="#" class="px-2">
                              Add to Collection
                            </a>
                          </li>
                          <li>
                            <a href="#" class="px-2">
                              Send a Message
                            </a>
                          </li>
                          <li>
                            <a href="#" class="px-2">
                              More Details
                            </a>
                          </li>
                        </ul>
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
          </Suspense>
          {/* pagination */}
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
}

/* tengo que crear una constante que guarde un array de todos los typos y generos para crear los checkbox asi como los rangos de precios */
/* crear un array con los elementos encontrados y mostrarlos en la pagina */
/* hacer un conteo del array para crear la barra de indices del fondo 


/* esta data se deve reemplasar por los resultados de busqueda 
 */
