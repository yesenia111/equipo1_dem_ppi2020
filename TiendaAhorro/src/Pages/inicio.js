import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import datos from "../Server/datos.json";
import estilo from "../Styles/inicio.css";

class Inicio extends React.Component {
  render() {
    return (
      <div className="Inicio">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} class="logo" alt="Fondo" />
              <p>¿Cómo quieres iniciar sesión?</p>

              <Link to="Inicio2">
                <button type="button" className="bot btn btn-ligh">
                  Cliente registrado
                </button>
                <br />
              </Link>
              <Link to="Cliente">
                {" "}
                <button type="button" className="bot btn btn-ligh">
                  Cliente anónimo
                </button>
                <br />
              </Link>
              <Link to="Inicio2">
                <button type="button" className="bot btn btn-ligh">
                  Tendero
                </button>
              </Link>
              <br />
            </div>

            <div className="col-sm-4 col-md-4 col-lg-3 "></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
