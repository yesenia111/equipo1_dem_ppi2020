import React from "react";
import { Link, NavLink } from "react-router-dom";
import estilo from "../Styles/Componentes.css";
import monster from "../Images/Monster.png";
import añadirC from "../Images/añadirC.png";
class Productos extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 ">
            <div class="card">
              <div class="card-body">
                <img src={monster} class="d-block w-100" alt="..." />
                <p class="card-text">
                Bebida energética
                
                  <img src={añadirC} class="d-block añadir" alt="..." />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productos;
