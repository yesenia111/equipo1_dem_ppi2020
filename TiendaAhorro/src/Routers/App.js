import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cliente from "../Pages/cliente";
import Tendero from "../Pages/tendero";
import Inicio from "../Pages/inicio";
import Inicio2 from "../Pages/inicio2";
import Carrito from "../Pages/carrito";
import Perfil from "../Pages/perfil";
import datos from "../Server/datos.json";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Redirect from="/Inicio" to="/Inicio2" />
        <Route exact path="/inicio2" component={Inicio2} />
        <Redirect from="/Inicio2" to="/Inicio" />
        <Route exact path="/tendero" component={Tendero} />
        <Route exact path="/cliente" component={Cliente} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/perfil" component={Perfil} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
