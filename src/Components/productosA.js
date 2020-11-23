import React from "react";
import { Link, NavLink } from "react-router-dom";
import estilo from "../Styles/Componentes.css";
import añadirC from "../Images/añadirC.png";

class ProductosA extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 ">
            <div class="card">
              <div class="card-body">
            alt="..." />
                <p class="card-text">
                Bebida energética
                <a href="/carritoAnonimo">
                  <img src={añadirC} class="d-block añadir" alt="..." />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductosA;
