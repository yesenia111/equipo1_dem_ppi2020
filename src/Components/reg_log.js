import React, {useState} from "react";
import Axios from "axios";
import sha1 from "sha1";


export default function Registration() {
  const [correoElectronicoReg, setCorreoElectronicoReg] = useState("");
  const [contrasenaReg, setContrasenaReg] = useState("");
  const [nombreReg, setNombreReg]=useState("")

  const [correoElectronico, setCorreoElectronic] = useState("");
  const [contrasena, setContrasena] = useState("");


  

  const register = () => {
    Axios.post("https://jmo9r.sse.codesandbox.io/api/registroUsuario", {      
      CorreoElectronico: correoElectronicoReg,
      Nombre: nombreReg,
      Contrasena: sha1(contrasenaReg)
       
    }).then((response) => {
      console.log(response.data);
    });
  }

  const login = () => {
    Axios.post("https://jmo9r.sse.codesandbox.io/api/login", { 
      CorreoElectronico: correoElectronico,
      Contrasena: sha1(contrasena),
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

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="UserEmail..."
          onChange={(e) => {
            setCorreoElectronic(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
    </div>
  );
}
