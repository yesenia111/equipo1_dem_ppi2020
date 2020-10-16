import React from "react";
import historial from "../Images/historial.png";



class Historial extends React.Component{
render(){

return(


<div>

<img src={historial} class="his" alt="Responsive image" />
<h4 class="titulos">Historial de pedidos</h4>
    <div class="col-sm-12 historial">
   
   
    <h6 class="titulos">Julio</h6>          
    <div class="col-sm-11 historial1"> 
     <strong>Semana 1:</strong> 4 productos - $45.000  <br/>
     <strong> Semana 2:</strong> 6 productos - $26.750 <br/>
     <strong> Semana 3:</strong> 15 productos - $127.590<br/>
     <strong> Semana 4:</strong> 9 productos - $32.720 <br/>
    </div>

    <h6 class="titulos">Agosto</h6> 
    <div class="col-sm-11 historial1"> 
    <strong>Semana 1:</strong> 6 productos - $36.200  <br/>
     <strong> Semana 2:</strong> 7 productos - $66.040 <br/>
     <strong> Semana 3:</strong> 5 productos - $24.610<br/>
     <strong> Semana 4:</strong> 4 productos - $16.500 <br/>
    </div>

    <h6 class="titulos">Septiembre</h6> 
    <div class="col-sm-11 historial1"> 
    <strong>Semana 1:</strong> 3 productos - $11.000  <br/>
     <strong> Semana 2:</strong> 8 productos - $67.420 <br/>
     <strong> Semana 3:</strong> 11 productos - $98.600<br/>
     <strong> Semana 4:</strong> 25 productos - $256.200 <br/>
    </div>
    


  </div>

  </div>

);

}

}

export default Historial;