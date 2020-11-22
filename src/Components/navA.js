import React from "react";
import atras from "../Images/espalda.png";

class NavA extends React.Component {
  render() {
    return (
      <div class="nav" id="fondo3">
        <a href="/anonimo">
          <img src={atras} class=" himg" alt="Back" />
        </a>
      </div>
    );
  }
}

export default NavA;
