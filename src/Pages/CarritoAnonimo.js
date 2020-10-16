import React from "react";
import { Link, NavLink } from "react-router-dom";

import Nav from "../Components/nav";
import carritoStyle from "../Styles/carritoStyle.css";
import estiloa from "../Styles/anonimo.css"
import MenuAnonimo from "../Components/menuAnonimo";
import CarritoAnonimo from "../Images/carritoAnonimo.jpeg";
class  carritoA extends React.Component {
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
            
           <center> <h2 className="titulos">Para hacer uso del carrito primero debes iniciar sesión</h2></center>
           <center><img src={CarritoAnonimo} class="carroanonimo" alt="Fondo" /></center>

<br/>

<center>
  <Link to="/">
<button type="button" class="btn" id="pago1">
               iniciar sesión
                </button></Link>
                </center>
            </div>
            <div class="col-sm-2"></div>
          </div>

          <br />

          <div class="container">
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm">
              
              
              </div>
              <div class="col-sm-"> </div>
            </div>
          </div>
        </div>
      </div>
      <MenuAnonimo />
    </div>
             

    );
  }
}

export default carritoA;
