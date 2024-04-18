'use client'

import data from "@/utils/data";
import Image from "next/image";

export default function FavoriteCarrousel() {
  const toggleCarousel = (action) => {
    const { Carousel } = require("bootstrap");
    const carousel = new Carousel("#my1Carousel");
    if (action === "next") {
      carousel.next();
    } else {
      carousel.prev();
    }
  };

  const carrouselSlides = data.map((e, i) => (
    <div key={i} className={"carousel-item" + (i === 0 ? " active" : "")}>
      <div className="card d-block w-100 mx-auto" style={{ maxWidth: "600px" }}>
        <div class="row g-0 mx-0">
          <div class="col-sm-6 p-0 d-flex justify-content-center">
            <Image
              src={e.img[0]}
              className="img-fluid rounded-start"
              width={300}
              height={200}
              alt={e.tittle}
            />
          </div>
          <div className="col-sm-6 p-0">
            <div className="card-body">
              <h4>{e.tittle}</h4>
              <p>{e.notes}</p>
              <span>
                <b>Condicion: </b>{e.condition}
              </span>
              <form className="form-inline" action="index.html" method="post">
                <div className="input-group mt-3 mb-3">
                  <div className="input-group-prepend">
                    <button
                      type="button"
                      name="button"
                      className="carousel-buttons buttons p-1 p-sm-2"
                    >
                      ${e.price}
                    </button>
                  </div>
                  <div className="input-group-append">
                    <button
                      className="carousel-buttons buttons p-1 p-sm-2"
                      type="button"
                      data-toggle="tooltip"
                      title="Add to cart"
                    >
                      <i className="fas fa-shopping-cart pr-2"></i>
                      <span className="text-white d-none d-sm-inline">
                        Carrito
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
  <section className="container-fluid mx-0 p-0 p-sm-3">
  <div className="container-fluid mx-auto carousel-div">
    <h2 className="text-uppercase">Favoritos</h2>
    <div>
      <div
        id="my1Carousel"
        className="carousel slide pb-5 carousel-dark"
        data-bs-touch="false"
        data-bs-interval="false"
      >

        <div className="carousel-inner">{carrouselSlides}</div>

        {/* Left and right controls */}
        <button
          className="carousel-control-prev"
          onClick={() => toggleCarousel("prev")}
        >
          <span className="carousel-control-prev-icon p-3 bg-dark rounded-circle" />
        </button>
        <button
          className="carousel-control-next"
          onClick={() => toggleCarousel("next")}
        >
          <span className="carousel-control-next-icon p-3 bg-dark rounded-circle" />
        </button>
      </div>
    </div>
  </div>
</section>
);
};