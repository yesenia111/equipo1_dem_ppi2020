import React from "react";
import historial from "../Images/historial.png";



class HistorialTendero extends React.Component{
render(){

return(


<div>

<img src={historial} class="his" alt="Responsive image" />
<h4 class="titulos">Historial de pedidos</h4>
    <div class="col-sm-12 historial">
   
   
    <h6 class="titulos">Julio</h6>          
    <div class="col-sm-11 historial1"> 
     <strong>Semana 1:</strong> 2 pedidos completados <br/>
     <strong> Semana 2:</strong> 3 pedidos completados <br/>
     <strong> Semana 3:</strong> 5 pedidos completados<br/>
     <strong> Semana 4:</strong> 9 pedidos completados <br/>
    </div>

    <h6 class="titulos">Agosto</h6> 
    <div class="col-sm-11 historial1"> 
    <strong>Semana 1:</strong> 6 pedidos completados  <br/>
     <strong> Semana 2:</strong> 1 pedidos completados <br/>
     <strong> Semana 3:</strong> 2 pedidos completados<br/>
     <strong> Semana 4:</strong> 4 pedidos completados <br/>
    </div>

    <h6 class="titulos">Septiembre</h6> 
    <div class="col-sm-11 historial1"> 
    <strong>Semana 1:</strong> 1 pedidos completados <br/>
     <strong> Semana 2:</strong> 5 pedidos completados <br/>
     <strong> Semana 3:</strong> 8 pedidos completados<br/>
     <strong> Semana 4:</strong> 15 pedidos completados <br/>
    </div>
    


  </div>

  </div>

);

}

}

export default HistorialTendero;