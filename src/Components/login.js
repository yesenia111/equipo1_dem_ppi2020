import React, {useState} from "react";
import Axios from "axios";
import sha1 from "sha1";
import Logo from "../Images/Logo.png";
import estilo from "../Styles/inicio.css";

export default function LoginEst (){
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");


const Login = () => {
    Axios.post("https://tienda-ahorro-backend.herokuapp.com/api/login", { 
      CorreoElectronico: correoElectronico,
      Contrasena: sha1(contrasena),
    }).then((response) => {
      console.log(response.data);
    });
}
  
  return(

       <div className="Inicio">
 <div className="container-fluid">
          <div className="row">
<div className="col-sm-4 col-md-4 col-lg-3"> </div>


    <div className="c col-sm-4 col-md-4 col-lg-6">
    
    <img src={Logo} class="logo" alt="Fondo" width="60%"/>
              <p>Ingresa tus datos</p>
        <h1>Login</h1>
        <input class="log form-group col-md-4"
          type="text"
          placeholder="UserEmail..."
          onChange={(e) => {
            setCorreoElectronico(e.target.value);
          }}
        /> <br/>
        <input class="log form-group col-md-4"
          type="password" 
          placeholder="Password..."
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
        /> <br/> <br/> 
        <button className="bot" onClick={Login}> Ingresar </button>
<br/> <br/> 
          <a  href="/" className="back">Volver</a>
</div>
      
<div className="col-sm-4 col-md-4 col-lg-3"> </div>
      </div>
      </div>
      </div>
    
 )
}

