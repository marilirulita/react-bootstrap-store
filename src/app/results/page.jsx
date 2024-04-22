import data from "@/utils/data";
import Image from "next/image";
import Search from "../ui/search";

export default function Page() {
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
          <p class="pt-3 pl-3 font-weight-bold">
            {data.length} result for ... example
          </p>
          <div id="product-results">
            {data.map((e, i) => (
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
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar${i}"
                      >
                        <span
                          class="btn border text-secondary font-weight-bold"
                          data-toggle="tooltip"
                          title="More"
                        >
                          +
                        </span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="collapsibleNavbar${i}"
                      >
                        <ul class="navbar-nav nav-top">
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
          
          {/* pagination */}
          <nav aria-label="...">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
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
