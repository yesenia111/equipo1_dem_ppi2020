import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import estilo from "../Styles/inicio.css";


 
 function Inicio2()  {
  

    return (
      <div className="Inicio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} className="logo" alt="Logo" />
              <p>¿Qué quieres hacer?</p>

             
              <br />
              <Link to="accederC">
          <button  type="button" className="bot btn btn-ligh">
                Iniciar sesión
              </button>
              </Link>
              
              <br />
              <Link to="registroC">
<button  type="button" className="bot btn btn-ligh">
                Registrarse
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

export default Inicio2;
