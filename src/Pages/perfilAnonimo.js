import React from "react";
import Nav from "../Components/nav";
import usuario from "../Images/usuarioAnonimo.jpeg";
import Menu from "../Components/menu";
import { Link, NavLink } from "react-router-dom";
import perfil from "../Styles/Perfil.css";


class PerfilAnonimo extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="fondo">
        <div className="row">
          <div className="h col-sm-12 col-md-12 col-lg-12 ">
            <header className="head">
<Nav/>
            </header>
          </div>

          <div class="container perfil">
            <h3 className="titulos">Perfil</h3> <br />
            <div class="row">
              <div class="col-sm-3"></div>

              <div class="col-sm-6 contenido ">
                <img src={usuario} class="user" alt="Responsive image" />{" "}
                <br />
                <br />
                <p> No ha iniciado sesión</p>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="*******"
                  readonly="readonly"
                />
                <br /> <br />
                <p> Información personal</p>
                <input
                  className="campo"
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="*******"
                  readonly="readonly"
                />
                <input
                  className="campo"
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="*******"
                  readonly="readonly"
                />
             
                <br /> <br />
                <p> Dirección </p>
                <select name="direccion" className="campo" readonly="readonly">
                  <option>*******</option>
                  <option>*******</option>
                  <option>*******</option>
                  <option>*******</option>
                  <option>*******</option>
                </select>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="*******"
                  className="text"
                  readonly="readonly"
                />
                <text> # </text>
                <input
                  type="txt"
                  id="buscarperfil"
                  name="search"
                  Value="******* "
                  className="text"
                  readonly="readonly"
                />
                <br />
                <br />

                <center>
                  {" "}
                  <Link to="/">
                    {" "}
                    <button type="button" class="btn" id="pago1">
               iniciar sesión
                </button></Link>
              
                </center>
                <hr />
                <br />
  <img src={usuario} class="user" alt="Responsive image" />{" "}
  <br />
  <br />
  <p> Inicie sesión para disfrutar de todas las funciones</p>
  <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea> 
      <br />
  <br />
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
export default PerfilAnonimo;
