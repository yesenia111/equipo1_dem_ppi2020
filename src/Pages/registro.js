import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";

import estilo from "../Styles/inicio.css";

class Registro extends React.Component {
  render() {
    return (
      <div className="Inicio">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} class="logo" alt="Fondo" />
              <p>¿Cómo quieres registrarte?</p>

              <Link to="registroC">
                <button type="button" className="bot btn btn-ligh">
                  Cliente
                </button>
                <br />
              </Link>
              
                
                <br />
              
              <Link to="registroT">
                <button type="button" className="bot btn btn-ligh">
                  Tendero
                </button>
              </Link>
              <br />
              <Link to="/">
                <a className="back">Volver</a>
              </Link>

            </div>

            <div className="col-sm-4 col-md-4 col-lg-3 "></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;