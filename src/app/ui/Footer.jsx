import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="footer-up-med mx-0 mx-sm-5 mx-lg-0">
          <div className="footer-up-elem mx-0 mx-sm-5 mx-md-0">
            <div className="d-flex">
              <a href="#" className="d-flex align-items-center">
                <Image
                  src="/logo1.png"
                  alt="Logo image brand"
                  width={100}
                  height={100}
                  className="rounded-circle p-2"
                />
                <h2 className="text-uppercase ml-3 my-0">Segunda Mano</h2>
              </a>
            </div>
            <p className="text-center">
              Descubre la belleza de la segunda oportunidad en nuestra tienda de
              ropa de segunda mano.Súmate a la moda consciente. Cada prenda
              cuenta una historia, ¡hazla parte de la tuya!.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-center">
          <div className="footer-up-med">
            <div className="footer-links">
              <h4>Categorias</h4>
              <div className="d-flex flex-column flex-sm-row">
                <ul className="pl-0">
                  <li>
                    <a href="#" className="text-nowrap">
                      Servicio al Cliente
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Politica de Devolucion
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Informacion de Envios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Programa de Recompensas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Contactanos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      FAQs
                    </a>
                  </li>
                </ul>
                <ul className="pl-3">
                  <li>
                    <a href="#" className="text-nowrap">
                      Ropa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Calzado
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Electrodomesticos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Herramienta
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Mascotas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-nowrap">
                      Exteriores
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-navig">
              <h4>Navegacion</h4>
              <ul className="pl-0">
                <li>
                  <a href="#" className="text-nowrap">
                    Bebes{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-nowrap">
                    Caballero{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-nowrap">
                    Dama{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-nowrap">
                    Niña{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-nowrap">
                    Niño
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-options">
            <div className="options">
              <h4 className="flex-grow-1">Pais</h4>
              <button type="button" name="button" className="flex-grow-1">
                Mexico
              </button>
            </div>
            <div className="options">
              <h4 className="flex-grow-1">Idioma</h4>
              <button type="button" name="button" className="flex-grow-1">
                Español
              </button>
            </div>
            <div className="options">
              <h4 className="flex-grow-1">Moneda</h4>
              <button type="button" name="button" className="flex-grow-1">
                Peso Mexicano
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-down">
        <p className="">
          Copyright Ⓒ 2024 Tienda de Segunda Mano. Todos los Derechos Reservados
        </p>
        <ul className="social-div p-0">
          <li className="mx-sm-3">
            <a href="#" data-toggle="tooltip" title="Facebook">
              <FaFacebook />
            </a>
          </li>
          <li className="mx-sm-3">
            <a href="#" data-toggle="tooltip" title="Twitter">
              <FaTwitterSquare />
            </a>
          </li>
          <li className="mx-sm-3">
            <a href="#" data-toggle="tooltip" title="Instagram">
              <FaInstagramSquare />
            </a>
          </li>
          <li className="mx-sm-3">
            <a href="#" data-toggle="tooltip" title="Youtube">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
