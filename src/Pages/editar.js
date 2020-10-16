import React from "react";
import { Link, NavLink } from "react-router-dom";

import EditarCss from "../Styles/carritoStyle.css";
import Menu from "../Components/menuTendero";
import AtrasTendero from "../Components/atrasTendero"
import tendero from "../Styles/Tendero.css";
import EditarInformacionP from "../Components/editarInformacionP";





class Editar extends React.Component {
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

                  <h4 class="titulos">Editar</h4>
                  <br/>
                  
                    <div class="col-sm" id="groceries">
                      <div class="container contenedor2 ">
                    
                        <div class="col-sm" id="groceries2">
                          <EditarInformacionP />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarInformacionP />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarInformacionP />{" "}
                     
                          <EditarInformacionP />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarInformacionP />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarInformacionP/>{" "}
                       
                          <EditarInformacionP />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarInformacionP/>{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarInformacionP/>{" "}
                        </div>
                      </div>
                    </div>
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

export default Editar;
