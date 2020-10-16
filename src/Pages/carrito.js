import React from "react";
import { Link, NavLink } from "react-router-dom";
import Monster from "../Images/Monster.png";
import enjuague from "../Images/enjuague.png";
import Jamondepierna from "../Images/Jamondepierna.png";
import Nav from "../Components/nav";
import carritoStyle from "../Styles/carritoStyle.css";
import Menu from "../Components/menu";

class Carrito extends React.Component {
  render() {
    return (
      <div className="container-fluid " id="fondo">
        <div className="row">
          <div className="h col-sm-12 col-md-12 col-lg-12 ">
            <header className="head">
              <Nav />
            </header>
          </div>



          <h2 className="carritoTitulo">Carrito </h2>
          <div className="container" id="Carritojp">
            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-8">
                <br />
                <figure>
                  <img src={enjuague} id="enjuagueCarrito" />
                </figure>
                <hr />
                Enjuague bucal Listerine <p className="cantidad">500ml </p>
              </div>{" "}
              <div>
                <br />
                $14.250
                <br />
                <button type="button" class="btn btn-outline botonCarrito">
                  +
                </button>
                <button type="button" class="btn btn-outline botonCarrito">
                  -
                </button>
              </div>
              <div class="col-sm-2"></div>
            </div>

            <br />

            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-8">
                <figure>
                  <img src={Jamondepierna} id="JamondepiernaCarrito" alt="xd" />
                </figure>
                <hr />
                Jamondepierna <p className="cantidad">5500gr </p>
              </div>{" "}
              <div>
                $21.390
                <br />
                <button type="button" class="btn btn-outline botonCarrito">
                  +
                </button>
                <button type="button" class="btn btn-outline botonCarrito">
                  -
                </button>
              </div>
              <div class="col-sm-2"></div>
            </div>

            <br />

            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-8">
                <figure>
                  <img src={Monster} id="MonsterCarrito" alt="xd" />
                </figure>
                <hr />
                Monster <p className="cantidad">473ml </p>
              </div>{" "}
              <div>
                $17.370
                <br />
                <button type="button" class="btn btn-outline botonCarrito">
                  +
                </button>
                <button type="button" class="btn btn-outline botonCarrito">
                  -
                </button>
              </div>
              <div class="col-sm-2"></div>
            </div>

            <br />

            <div class="container">
              <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                  <button type="button" class="btn " id="vaciarCarrito">
                    Vaciar carrito
                  </button>
                  <br />
<Link to="/Confirmar">
                  <button type="button" className="btn btn-ligh" id="continuar">
                    Continuar
                  </button>
                  </Link>
                </div>
                <div class="col-sm-"> </div>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default Carrito;
