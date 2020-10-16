import React from "react";
import atras from "../Images/espalda.png"

class AtrasTendero extends React.Component {
  render(){
    return(
      <div id="fondo3">
      <a href="/tendero">
      <img
        src={atras}
        class=" himg"
        alt="imagen
      "
      />
    </a>
  </div>
      
    )
  }
}

export default AtrasTendero;