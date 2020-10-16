import React from "react";
import Nav from "../Components/nav";
import alfiler from "../Images/alfiler.png";
import pago from "../Images/Pago.png";
import Menu from "../Components/menu.js";
import Entrega from "../Images/Entrega.png"
import { Link, NavLink } from "react-router-dom";
import perfil from "../Styles/Perfil.css";

class Confirmar extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="fondo">
        <div className="row">
          <div className="h col-sm-12 col-md-12 col-lg-12 ">
            <header className="head">
              <Nav />
            </header>
          </div>

          <div class="container perfil">
            <h3 className="titulos">Confirma tus datos</h3> <br />
            <div class="row">
              <div class="col-sm-3"></div>

              <div class="col-sm-6 contenido ">
                <img src={alfiler} class="user" alt="Responsive image" />

                <p> Dirección </p>
                <select name="direccion" className="campo">
                  <option>Calle</option>
                  <option>Carrera</option>
                  <option>Diagonal</option>
                  <option>Circunvalar</option>
                  <option>Peatonal</option>
                </select>

                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="101 B"
                  className="text"
                />
                <text> # </text>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="77 C - 25 "
                  className="text"
                />
                <br />
                <br />
                <p>Información adicional </p>
                <input
                  className="info"
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="Barrio"
                />
                <br />
                <br />
                <p>Tipo de lugar</p>
                <center>
                  <div class="form-check" id="tipo">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Casa
                    </label>
                  </div>
                  <div class="form-check" id="tipo">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Apto
                    </label>
                  </div>
                  <div class="form-check" id="tipo">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios3">
                      Oficina
                    </label>
                  </div>
                  <div class="form-check" id="tipo">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios4"
                      value="option4"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios4">
                      otro
                    </label>
                  </div>
                </center>

                <hr />

                <img src={pago} class="user" alt="Responsive image" />
                <p>información de pago</p>

                <input
                  type="txt"
                  id="datosCompra"
                  name="infoNombre"
                  Value="Nombre"
                />
                <input
                  type="txt"
                  id="datosCompra"
                  name="infoDocumeto"
                  Value="Documento"
                />
                <br />

                <button type="button" class="btn" id="pago1">
                Pago completo
                </button> <button type="button" class="btn" id="pago2">
                Pago con vuelta
                </button>

                <br />
                <hr />
                <img src={Entrega} class="user" alt="Responsive image" />
                <p>Tiempo de entrega extimado:</p>
                <p>50 min.</p>
             <center>   <Link to="/realizado">
                    {" "}
                    <button type="button" class="btn" id="cerrar">
                      Continuar
                    </button>{" "}
                  </Link>
                  </center>
              </div>
              <div class="col-sm-3"> </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}
export default Confirmar;
