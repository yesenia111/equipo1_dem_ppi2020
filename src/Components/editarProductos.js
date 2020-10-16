import React from "react";
import { Link, NavLink } from "react-router-dom";
import estilo from "../Styles/Componentes.css";
import monster from "../Images/Monster.png";
import editar from "../Images/editar.png";

class EditarProductos extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 ">
            <div class="card">
              <div class="card-body">
                <img src={monster} class="d-block w-100" alt="..." />
                
                <p class="card-text">
                Bebida energética
                
                <Link to="editar">              
                  <img src={editar} class="d-block añadir" alt="..." /> 
                </Link>
               
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditarProductos;
