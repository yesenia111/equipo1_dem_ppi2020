import React from "react";
import { Link, NavLink } from "react-router-dom";
import estilo from "../Styles/Componentes.css";
import monster from "../Images/Monster.png";
import lapiz from "../Images/lapiz.png";

class EditarInformacionP extends React.Component {
  render() {
    return (
      <div className="container divEdit">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 ">
            <div class="card">
              <div class="card-body">
                <img src={monster} class="d-block w-100 " alt="..." />

                <p class="card-text">Bebida energética</p>
                <div className="reporte">
                  <h6 class="titulos">Modificar</h6>

                  <br />
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"                  
                    rows="8"
                  ></textarea>
                  <Link to="tendero">
                    <button type="button" class="btn" id="delete">
                      Enviar
                    </button>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditarInformacionP;
