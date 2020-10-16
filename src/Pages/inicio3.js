import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import datos from "../Server/datos.json";
import estilo from "../Styles/inicio.css";

class Inicio3 extends React.Component {
  render() {
    return (
      <div className="Inicio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} class="logo" alt="Logo" />
              <p>¿Cómo quieres iniciar sesión?</p>



              <button type="button" className="bot btn btn-ligh">
                Google
              </button>
              <br />


              <Link to="/tendero">
              <button type="button" className="bot btn btn-ligh">
                Facebook
              </button>
              </Link>
              <br />
              <Link to="/">
                <p className="back">Volver</p>
              </Link>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-3 "></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inicio3;