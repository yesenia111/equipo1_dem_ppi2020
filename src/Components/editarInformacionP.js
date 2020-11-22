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
            <div className="card">
              <div className="card-body">
                <img src={monster} className="d-block w-100 " alt="..." />
                
                <p className="card-text">
                Bebida energética
                
                <Link to="modificarProductos">              
                  <img src={lapiz} className="d-block añadir" alt="..." /> 
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

export default EditarInformacionP;

