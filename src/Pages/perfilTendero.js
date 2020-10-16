import React from "react";
import usuario from "../Images/usuario.png";
import ajustes from "../Images/ajustes.png";
import Menu from "../Components/menuTendero";
import Reporte from "../Components/reporte";
import Historial from "../Components/historialTendero";
import { Link, NavLink } from "react-router-dom";
import perfil from "../Styles/Perfil.css";
import AtrasTendero from "../Components/atrasTendero"

class PerfilTendero extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="fondo">
        <div className="row">
          <div className="h col-sm-12 col-md-12 col-lg-12 ">
            <header className="head">
              
              <AtrasTendero/>
             
            </header>
          </div>

          <div class="container perfil">
            <h3 className="titulos">Perfil</h3> <br />
            <div class="row">
              <div class="col-sm-3"></div>

              <div class="col-sm-6 contenido ">
                <img src={usuario} class="user" alt="Responsive image" />{" "}
                <img src={ajustes} class="ajustes" alt="Responsive image" />
                <br />
                <br />
                <p> Vinculado con </p>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="Google"
                  readonly="readonly"
                />
                <br /> <br />
                <p> Información personal</p>
                <input
                  className="campo"
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="Nombre"
                  readonly="readonly"
                />
                <input
                  className="campo"
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="Barrio"
                />
             
                <br /> <br />
                <p> Dirección establecimiento </p>
                <select name="direccion" className="campo">
                  <option>Calle</option>
                  <option>Carrera</option>
                  <option>Diagonal</option>
                  <option>Circunvalar</option>
                  <option>Peatonal</option>
                </select>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="28"
                  className="text"
                />
                <text> # </text>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="25 b 02 "
                  className="text"
                />
                <br />
                <br />
                <center>
                  {" "}
                  <Link to="/">
                    {" "}
                    <button type="button" class="btn" id="cerrar">
                      cerrar sesión
                    </button>{" "}
                  </Link>
                </center>
                <hr />
                <Historial />
                <br />
                <hr />
                <Reporte />
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
export default PerfilTendero;
