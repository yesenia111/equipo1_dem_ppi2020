import React from "react";
import Nav from "../Components/nav";
import Domicilio from "../Images/Domicilio.png";
import Menu from "../Components/menu.js";
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

              <img src={Domicilio} class="" alt="Responsive image" id="imagenresponsive"/>

             <center> <p>Tu pedido va en camino. Tiempo estimado: 50 min.
              </p></center>
<hr/>

              <center>
                  <Link to="/cliente">
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