"use client";

import Image from "next/image";
import data from "./data";
import useScreenSize from "@/components/screenSize";

export default function BestSellerCarousel() {
  // primero tengo que saber el screen zise, par saber cuantas columnas tendra cada slise del carrusel
  const answer = useScreenSize();

  // esta variable me indica el numero de slices que tendra el carrusel
  let carouselItem = 0;
  // esta variable me indica cuantas columnas se tendra cada slice segun el tamano de la screen
  let colNum = 0;
  // esta variable me dice cuanto deve medir cada columna para que se acomode en el row, muliplos de 12
  let colnumsize = 0;

  if (answer.width > 1025) {
    colNum = 4;
    colnumsize = 3;
    carouselItem = Math.floor(data.length / 4);
  } else if (answer.width > 769) {
    colNum = 3;
    colnumsize = 4;
    carouselItem = Math.floor(data.length / 3);
  } else if (answer.width > 481) {
    carouselItem = Math.floor(data.length / 2);
    colNum = 2;
    colnumsize = 6;
  } else {
    carouselItem = data.length;
    colnumsize = 12;
    colNum = 1;
  }

  //Crear carrusel
  const toggleCarousel = (action) => {
    const { Carousel } = require("bootstrap");
    const carousel = new Carousel("#myCarousel");
    if (action === "next") {
      carousel.next();
    } else {
      carousel.prev();
    }
  };

  // este loop creara cada slice dependiendo del tamano de la base de datos y del screen size

  // esta variable es un contador para el slice que se requiere obtener
  let slicenum = 0;
  // esta variable sigue el conteo de cuantas columnas iran dentro del row
  let counter = 0;
  // este loop crea cada una de as targetas en su respectiva row con su columna

  return (
    <section className="container-fluid py-3">
      {/* Best seller, camisas */}
      <h3 className="my-4 border-bottom">
        <i className="far fa-smile-beam" />
        Varios
      </h3>
      <div
        id="myCarousel"
        className="carousel slide px-5"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner" id="products-inner">
          {/* crea cada slice segun las divisiones necesarias */}
          {[...Array(carouselItem).keys()].map((e) => (
            <div
              key={"item" + e}
              className={"carousel-item " + (e === 0 ? "active" : "")}
            >
              <div className="row">
                {/* buscar dentro del data array elementos especificos */}
                {data.slice(0, 3).map((e, i) => (
                  <div key={"col" + i} className={"col-" + colnumsize}>
                    <div className="card">
                      <div className="embed-responsive embed-responsive-1by1">
                        <a href="#">
                          <Image
                            width={200}
                            height={200}
                            src="/logo1.png"
                            alt="logo image"
                            className="embed-responsive-item"
                          />
                        </a>
                      </div>
                      <div className="card-body clearfix prod-desc">
                        <h4 className="card-title m-0">{e.tittle}</h4>
                        <p className="card-text">{e.notes}</p>
                        <h5 className="card-text float-right">${e.price}</h5>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsibleNavbar"
                        >
                          <span
                            className="btn text-secondary border font-weight-bold"
                            data-toggle="tooltip"
                            title="More"
                          >
                            +
                          </span>
                        </button>
                        <div
                          className="collapse navbar-collapse w-100"
                          id="collapsibleNavbar"
                        >
                          <ul className="navbar-nav nav-top w-100">
                            <li>
                              <a href="#" className="px-2 text-nowrap">
                                Agregar a carrito
                              </a>
                            </li>
                            <li>
                              <a href="#" className="px-2 text-nowrap">
                                Enviar un mensaje
                              </a>
                            </li>
                            <li>
                              <a href="#" className="px-2 text-nowrap">
                                Mas Detalles
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Left and right controls */}
        <button
          className="carousel-control-prev justify-content-start"
          onClick={() => toggleCarousel("prev")}
        >
          <span className="carousel-control-prev-icon bg-dark p-4" />
        </button>
        <button
          className="carousel-control-next justify-content-end"
          onClick={() => toggleCarousel("next")}
        >
          <span className="carousel-control-next-icon bg-dark p-4" />
        </button>
      </div>
    </section>
  );
}
