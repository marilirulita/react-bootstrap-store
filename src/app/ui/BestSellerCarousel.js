"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';
import data from "./data";
import useScreenSize from "@/components/screenSize";
import { FaRegSmileBeam } from "react-icons/fa";

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

  // esta variable es un contador de inicio el producto que se mostrara
  let itemInic = 0;
  // esta variable es un contador final del producto que se mostrara
  let itemFinal = 0;

  return (
    <section className="container-fluid py-3 best-seller">
      {/* Best seller, camisas */}
      <div className="my-4 border-bottom d-flex pb-3">
        <FaRegSmileBeam/>
        <h3>Varios</h3>
      </div>
      <div
        id="myCarousel"
        className="carousel slide px-5"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner" id="products-inner">
          {/* este loop creara cada slice dependiendo del tamano de la base de datos y del screen size */}
          {[...Array(carouselItem).keys()].map((e) => {
            e === 0 ? itemInic = 0 : itemInic = itemFinal
            e === 0 ? itemFinal = colNum : itemFinal = itemFinal + colNum
            console.log(itemInic, itemFinal)
            return (
              <div
                key={"item" + e}
                className={"carousel-item " + (e === 0 ? "active" : "")}
              >
                <div className="row">
                  {/* este loop crea cada una de las targetas en su respectiva row con su columna */}

                  {data.slice(itemInic, itemFinal).map((e, i) => (
                    <div key={"col" + i} className={"col-" + colnumsize}>
                      <div className="card">
                        <div className="embed-responsive embed-responsive-1by1">
                          <Link href="/" className="d-flex justify-center">
                            <Image
                              width={230}
                              height={200}
                              src={e.img[0]}
                              alt={e.notes}
                              className="embed-responsive-item"
                            />
                          </Link>
                        </div>
                        <div className="card-body clearfix prod-desc">
                          <h4 className="card-title m-0">{e.tittle}</h4>
                          <p className="card-text">{e.notes}</p>
                          <h5 className="card-text float-right">${e.price}</h5>

                          <Dropdown>
                            <Dropdown.Toggle
                            className="btn border font-weight-bold"  
                            data-toggle="tooltip"
                            title="More"
                            variant="dark" 
                            id="dropdown-basic"
                            >
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="nav-drop">
                              <Dropdown.Item className="px-2 text-nowrap" href="#/action-1">
                                  Agregar a carrito
                              </Dropdown.Item>
                              <Dropdown.Item className="px-2 text-nowrap" href="#/action-2">
                              Enviar un mensaje
                              </Dropdown.Item>
                              <Dropdown.Item className="px-2 text-nowrap" href="#/action-3">
                              Mas Detalles
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );})}
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
