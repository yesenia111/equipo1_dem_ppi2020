import React, {useState} from "react";
import axios from "axios";


export default function LoginEst (){
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");

  
    const Login = () => {
      axios.post("https://jmo9r.sse.codesandbox.io/api/login", { 
        CorreoElectronico: correoElectronico,
        Contrasena: contrasena,
      }).then((response) => {
        console.log(response.data);
      });
    }

    return(
      <div className="App">
      <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="UserEmail..."
        onChange={(e) => {
          setCorreoElectronico(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setContrasena(e.target.value);
        }}
      />
      <button onClick={Login}> Login </button>
    </div>
    </div>

    )

}
