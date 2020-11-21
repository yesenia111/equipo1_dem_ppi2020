import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import estilo from "../Styles/inicio.css";
import Reg_log from  "../Components/reg_log.js"

 
 function Inicio2()  {
  

    return (
      <div className="Inicio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} className="logo" alt="Logo" />
              <p>¿Cómo quieres iniciar sesión?</p>

             
              <br />
          
             
              
              <br />
              

            <Link to="Cliente">

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
