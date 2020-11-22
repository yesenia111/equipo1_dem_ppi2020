import React, {useState} from "react";
import Axios from "axios";
import sha1 from "sha1";

export default function registrarEst(){
  const [correoElectronicoReg, setCorreoElectronicoReg] = useState("");
  const [contrasenaReg, setContrasenaReg] = useState("");
  const [nombreReg, setNombreReg]=useState("")

 
}

  const register = () => {
    Axios.post("https://jmo9r.sse.codesandbox.io/api/registroUsuario", {      
      CorreoElectronico: correoElectronicoReg,
      Nombre: nombreReg,
      Contrasena: sha1(contrasenaReg)
       
    }).then((response) => {
      console.log(response.data);
    });
  }

  return (
  <div className="App">
      <div className="registration">
        <h1>Registro</h1>
        <label>Correo electronico</label>
        <input
          type="email"
          onChange={(e) => {
            setCorreoElectronicoReg(e.target.value);
          }}
        />
        <label>Nombre completo </label>
        <input
          type="text"
          onChange={(e)=>{
            setNombreReg(e.target.value)
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setContraseñaReg(e.target.value);
          }}
        />
        <button onClick={register}> Registrar </button>
      </div>
     </div> 
  );
}

