import React from "react";
import { Link, NavLink } from "react-router-dom";
import atras from "../Images/espalda.png";
import Menu from "../Components/menuTendero";
import AtrasTendero from "../Components/atrasTendero"
import EditarInformacionP from "../Components/editarInformacionP";
import ModProducto from "../Components/modProducto"
import Componentes from "../Styles/Componentes.css"



class ModificarProductos extends React.Component {
  render() {
    return (
      <div class="Cliente " id="fondo">
        <div className="container-fluid ">
          <div className="row">
            <div className="h col-sm-12 col-md-12 col-lg-12 ">
              <header className="head">
                
                <AtrasTendero/>

                
              </header>

            </div>
            <div class="container cliente">
              <div class="row">
                <div class="col-sm-2"></div>

                <div class="col-sm-8 contenido ">
                 

                  <hr />
                  <br/>

                  <h4 class="titulos" id="tituloModProd">Edita la información del producto seleccionado</h4>
                  <br/>
                  
                    
                        <div class="col-sm" id="groceries2">
                         <ModProducto />

                         
                        </div>
                        

                        <br/>
                  
                  </div>
                </div>

                <div class="col-sm-2"></div>
              </div>
            </div>
          </div>
          <br />
          <Menu />
        </div>
    
    
    );
  }
}

export default ModificarProductos;
