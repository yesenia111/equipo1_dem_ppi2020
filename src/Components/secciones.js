import React from "react";
import { Link, NavLink } from "react-router-dom";

import estilo from "../Styles/Componentes.css";
import monster from "../Images/Monster.png";

class Pasillos extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">Higiene y aseo</div>
          <div class="col-sm">Carnes</div>
          <div className="container-fluid">
            <div className="row">
              <div className=" col-sm-4 col-md-12 col-lg-12 ">
                <div class="card">
                  <div class="card-body">
                    <img src={monster} class="d-block w-100" alt="..." />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">Lacteos</div>
        </div>
      </div>
    );
  }
}

export default Pasillos;
