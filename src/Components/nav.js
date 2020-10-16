import React from "react";
import atras from "../Images/espalda.png";

class Nav extends React.Component {
  render() {
    return (
      <div class="nav" id="fondo3">
        <a href="/">
          <img src={atras} class=" himg" alt="Back" />
        </a>
      </div>
    );
  }
}

export default Nav;
