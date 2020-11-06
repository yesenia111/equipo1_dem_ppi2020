import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import datos from "../Server/datos.json";
import estilo from "../Styles/inicio.css";

class RegistroT extends React.Component {
  render() {
    return (
      <div className="Inicio">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} class="logo" alt="Fondo" />
              <p>Ingresa tus datos</p>

              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputAddress2">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAddress2">apellido</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellido"
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Contraseña</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Ej. calle 1 a # 45c 2"
                  />
                </div>

                <div class="form-group">
                    <label for="inputAddress2">Nombre del local</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre establecimiento"
                    />
                  </div>

              

                <button type="submit" class="btn btn-primary">
                  Registrarse
                </button>
              </form>

              <br />
              <Link to="/registro">
                <a className="back">Volver</a>
              </Link>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-3 "></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistroT;