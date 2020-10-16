import React from "react";
import { Link, NavLink } from "react-router-dom";
import editar from "../Images/editar.png";
import buscar from "../Images/buscar.png";
import EditarProductos from "../Components/editarProductos";
import Menu from "../Components/menuTendero";
import atras from "../Images/espalda.png"
import AtrasTendero from "../Components/atrasTendero"


class Tendero extends React.Component {
  render() {
    return (
      <div class="Cliente " id="fondo">
        <div className="container-fluid ">
          <div className="row">
            <div className="h col-sm-12 col-md-12 col-lg-12 " id="fondo2">
              <header className="head" >
              <a href="/tendero">
      <img
        src={atras}
        class=" himg"
        alt="imagen
      "
      />
    </a>

                <a href="/editar">
                  {" "}
                  <img
                    src={editar}
                    class="himg carro"
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
                    <p>
                      <a
                        class="botonb btn btn-ligh"
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Buscar en la tienda
                      </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                        <input
                          type="text"
                          id="search"
                          placeholder="¿Qué estás buscando?"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>

            <h2 class="titulos">  </h2>

            <div class="container cliente">
              <div class="row">
                <div class="col-sm-3"></div>

                <div class="col-sm-6 contenido ">
                  <h4 class="titulos">Productos destacados</h4>
                  <div class="container-fluid contenedor ">
                    <div class="col-sm" id="groceries">
                      <EditarProductos />{" "}
                    </div>             
                    <div class="col-sm " id="groceries">
                      <EditarProductos />{" "}
                    </div>
                    <div class="col-sm " id="groceries">
                      <EditarProductos />{" "}
                    </div>
                  </div>

                  <hr />
                  <br/>

                  <h4 class="titulos">Secciones</h4>
                  <br/>
                  <div class="container-fluid contenedor ">
                    
                    <div class="col-sm" id="groceries">
                      <div class="container-fluid contenedor2 ">
                        <h4 class="titulos">Higiene y aseo</h4>
                        <div class="col-sm" id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-sm " id="groceries">
                      <div class="container-fluid contenedor2 ">
                        <h4 class="titulos">Carnes</h4>
                        <div class="col-sm" id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                      </div>{" "}
                    </div>
                    <div class="col-sm " id="groceries">
                      <div class="container-fluid contenedor2 ">
                        <h4 class="titulos">Bebidas</h4>
                        <div class="col-sm" id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                        <div class="col-sm " id="groceries2">
                          <EditarProductos />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3"></div>
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

export default Tendero;
