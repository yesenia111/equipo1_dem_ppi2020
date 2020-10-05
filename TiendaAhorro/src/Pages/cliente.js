import React from "react";
import { Link, NavLink } from "react-router-dom";
import atras from "../Images/espalda.png";
import carrito from "../Images/carrito.png";
import buscar from "../Images/buscar.png";
import estilo from "../Styles/Clientes.css";

import Productos from "../Components/productos.js";
import Pasillos from "../Components/secciones";
import Menu from "../Components/menu";

class Cliente extends React.Component {
  render() {
    return (
      <div class="Cliente">
        <div className="container-fluid ">
          <div className="row">
            <div className="h col-sm-12 col-md-12 col-lg-12 ">
              <header className="head">
                <a href="/">
                  <img
                    src={atras}
                    class=" himg"
                    alt="imagen
                  "
                  />
                </a>
                <a href="/carrito">
                  {" "}
                  <img
                    src={carrito}
                    class=" himg carro"
                    alt="imagen
                    "
                  />
                </a>
                <div className="row">
                  <div className="s col-sm-4 col-md-12 col-lg-4 ">
                    <img
                      src={buscar}
                      class=" bimg"
                      alt="imagen
                    "
                    />
                    <input
                      type="text"
                      id="search"
                      placeholder="Buscar en la tienda"
                    />
                  </div>
                </div>
              </header>
            </div>

            <h2 class="titulos">Inicio</h2>

            <div class="container cliente">

           
  <div class="row">
    <div class="col-sm-3">
      
    </div>
    <div class="col-sm-6 contenido ">
      
<div class="container-fluid contenedor ">
<h4 class="titulos">Productos destacados</h4>
      <div class="col-sm" id="groceries"><Productos/> </div>
      <div class="col-sm " id="groceries"><Productos/> </div>
      <div class="col-sm " id="groceries"><Productos/> </div>
      </div>
     
     
      <hr/>

      <div class="container-fluid contenedor2 ">
      <h4 class="titulos">Secciones</h4>
      <div class="col-sm" id="groceries2"><Productos/> </div>
      <div class="col-sm " id="groceries2"><Productos/> </div>
      <div class="col-sm " id="groceries2"><Productos/> </div>


      </div>
    </div>




    <div class="col-sm-3">
     
    </div>
  </div>



            </div>


          </div>
          <br />
             
                <Menu />
          
        </div>
      </div>
    );
  }
}

export default Cliente;
