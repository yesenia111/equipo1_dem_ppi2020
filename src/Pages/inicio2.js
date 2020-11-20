import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import datos from "../Server/datos.json";
import estilo from "../Styles/inicio.css";


class Inicio2 extends React.Component {
  

  render() {
    return (
      <div className="Inicio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} className="logo" alt="Logo" />
              <p>¿Cómo quieres iniciar sesión?</p>

              <button className="g-signin2 btn" data-onsuccess="onSignIn">

              </button>
              <br />
          
             
              
              <br />
              

            <Link to="Cliente">
              <button onClick="onLogin();" type="button" className="bot btn btn-ligh">
                Facebook
              </button>
              </Link>
              <br />

            
                <a  href="/" className="back">Volver</a>
            
            </div>

            <div className="col-sm-4 col-md-4 col-lg-3 "></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inicio2;
