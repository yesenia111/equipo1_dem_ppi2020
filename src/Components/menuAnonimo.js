import React from "react";
import home from "../Images/Home.png";
import perfil from "../Images/perfil.png";
class MenuAnonimo extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 col-md-4 col-lg-4" id="menu">
            <a href="/anonimo">
              <img src={home} class="d-block casa" alt="..." />
            </a>{" "}
            <hr />
          </div>

          <div class="col-sm-4 col-md-4 col-lg-4" id="menu"></div>

          <div class="col-sm-4 col-md-4 col-lg-4" id="menu">
            <a href="/perfilAnonimo">
              {""}
              <img src={perfil} class="d-block casa" alt="..." />
            </a>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default MenuAnonimo;
