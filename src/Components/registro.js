import React, {useState} from "react";
import Axios from "axios";



export default function Registration() {
  const [correoElectronicoReg, setCorreoElectronicoReg] = useState("");
  const [contrasenaReg, setContrasenaReg] = useState("");
  const [nombreReg, setNombreReg]=useState("")



  const register = () => {
    Axios.post("https://jmo9r.sse.codesandbox.io/api/registroUsuario", {      
      CorreoElectronico: correoElectronicoReg,
      Nombre: nombreReg,
      Contrasena: contrasenaReg
       
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
            setContrasenaReg(e.target.value);
          }}
        />

        <button onClick={register}> Registrar </button>
      </div>

    </div>
  );
}

