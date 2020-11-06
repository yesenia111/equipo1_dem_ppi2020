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
                    rows="2"
                    placeholder="ingresa detalles del producto"
                  ></textarea>
<br/>


<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    Producto disponible
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Producto agotado
  </label>
  </div><br/>

                  <form>
                  <div class="row">
                  <label for="inputEmail4">Pasillo</label>
    <div class="col">
      <input type="text" class="form-control" placeholder="sección"/>
    </div>
    </div>
    <br/>
                    <div class="form-group">
                      <label for="exampleFormControlFile1">
                        Selecciona la imagén
                      </label>
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </form>
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
