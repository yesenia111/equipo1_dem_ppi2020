import React, {useState} from "react";
import Axios from "axios";
import sha1 from "sha1";

export default function loginEst {
   const [correoElectronico, setCorreoElectronic] = useState("");
  const [contrasena, setContrasena] = useState("");
}

const login = () => {
    Axios.post("https://jmo9r.sse.codesandbox.io/api/login", { 
      CorreoElectronico: correoElectronico,
      Contrasena: sha1(contrasena),
    }).then((response) => {
      console.log(response.data);
    });
  }
  
  return
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
    