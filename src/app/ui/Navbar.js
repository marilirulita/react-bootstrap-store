'use client'

import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar() {

  return (
    <div>
    <div className="div-head fixed-top mb-5">
  <div id="top">
    {/* hay un solo navbar con dos divisions */}
    <div className="navbar navbar-expand-sm justify-content-around navbar-dark">
      <div className="container-fluid">
        <a
          href="./index.html"
          className="navbar-brand d-flex align-items-center"
          data-toggle="tooltip"
          title="Tienda de Segunda Mano"
        >
          {/* logo */}
          <Image
            src="/logo1.png"
            alt=""
            width={40}
            height={40}
            className="rounded-circle mx-2 mx-lg-0"
          /> 
          <h5 className="brand-title text-white d-sm-none d-md-block ml-3 my-0">
            Tienda Online
          </h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse mb-1"
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-around icons-group w-100">
            {/* division 1 */}
            <ul className="navbar-nav align-items-sm-center align-items-start">
              <li className="nav-item">
                <a
                  href="./index.html"
                  className="nav-link text-uppercase text-nowrap"
                  data-toggle="tooltip"
                  title="Home"
                >
                  <i className="fas fa-home" />
                  <span className="px-lg-3 d-sm-none d-lg-inline">Inicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="./results-page.html"
                  className="nav-link text-uppercase text-nowrap"
                  data-toggle="tooltip"
                  title="Collections"
                >
                  <i className="fas fa-expand" />
                  <span className="px-lg-3 d-sm-none d-lg-inline">
                    Catalogo
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-uppercase text-nowrap"
                  data-toggle="tooltip"
                  title="Shop"
                >
                  <i className="fas fa-shopping-cart" />
                  <span className="px-lg-3 d-sm-none d-lg-inline">
                    Lista de Compra
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  name="button"
                  className="text-uppercase buttons text-nowrap d-sm-block"
                >
                  Post an ad
                </button>
              </li>
            </ul>
            {/* division 2 */}
            <ul className="navbar-nav align-items-sm-center align-items-start justify-content-center">
              <li className="nav-item">
                <a
                  href="https://api.whatsapp.com/send?phone=526862581063&text=Hola, quiero informacion sobre estos productos!"
                  className="nav-link text-uppercase d-flex align-items-end"
                  data-toggle="tooltip"
                  title="Messages"
                >
                  <i className="far fa-envelope" />
                  <span className="text-capitalize pl-2 d-sm-none">
                    Messages
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-uppercase text-nowrap"
                  data-toggle="tooltip"
                  title="Profile"
                >
                  <span className="text-capitalize pr-2 d-lg-none d-xl-inline">
                    your name
                  </span>
                  <i className="fas fa-user" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Header division */}
<header className="mt-5">
  <div className="header-style d-flex flex-column align-items-center">
    <div className="d-flex flex-column align-items-center mt-0 mt-sm-4">
      <h1 className="mx-0 text-uppercase text-center">Segunda Mano</h1>
      <p className="text-capitalize text-center px-4">
        Convierte lo pre-amado en lo perfecto para ti.
      </p>
    </div>
    <form className="form-inline" action="./results-page.html" method="get">
      <div className="input-group mb-1 mx-2">
        <Dropdown className="input-group-prepend">
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle but-drop">
            Todos los productos
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu nav-drop">
            <Dropdown.Item href="./results-page.html">Blusas</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Camisas</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Interior</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pantalones</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sueters</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Zapatos</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bebes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Caballero</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Dama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Niña</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Niño</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> Primavera-Verano</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Otoño-Invierno</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input
          type="text"
          className="form-control"
          placeholder="¿Que estas buscando?"
        />
        <input
          type="text"
          className="form-control d-none d-sm-inline"
          placeholder="Lugar"
        />
        <button
          className="but-search ml-2 d-none d-sm-inline"
          type="submit"
          data-toggle="tooltip"
          title="Search"
        >
          Buscar
        </button>
      </div>
      <div className="input-group mt-0 mb-3 mx-2 d-sm-none">
        <input type="text" className="form-control" placeholder="Place" />
        <button
          className="but-search ml-1"
          type="submit"
          data-toggle="tooltip"
          title="Search"
        >
          Buscar
        </button>
      </div>
    </form>
  </div>
</header>

</div>
  )
}
