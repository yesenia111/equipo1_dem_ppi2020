import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

class correoT extends React.Component {
  render() {
    return (
      <div className="Inicio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3"> </div>

            <div className="col-sm-4 col-md-4 col-lg-6">
              <img src={Logo} class="logo" alt="Logo" />
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Iniciar sesión
                </button>
              </form>
              <br />
              <p>¿aún no te has reistrado?</p>
              <a href="registroT">Registraté</a> <br /><br />
              <Link to="/">
                <a className="back">Inicio</a>
              </Link>
              <div className="col-sm-4 col-md-4 col-lg-3 "></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default correoT;
