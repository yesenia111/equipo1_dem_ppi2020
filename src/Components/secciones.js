import React from "react";
import { Link, NavLink } from "react-router-dom";

import estilo from "../Styles/Componentes.css";
import monster from "../Images/Monster.png";

class Pasillos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">Higiene y aseo</div>
          <div className="col-sm">Carnes</div>
          <div className="container-fluid">
            <div className="row">
              <div className=" col-sm-4 col-md-12 col-lg-12 ">
                <div className="card">
                  <div className="card-body">
                    <img src={monster} className="d-block w-100" alt="..." />
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">Lacteos</div>
        </div>
      </div>
    );
  }
}

export default Pasillos;
