import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cliente from "../Pages/cliente";
import anonimo from "../Pages/inicioAnonimo";
import Tendero from "../Pages/tendero";
import Inicio from "../Pages/inicio";
import Inicio2 from "../Pages/inicio2";
import Inicio3 from "../Pages/inicio3";
import Carrito from "../Pages/carrito";
import CarritoAnonimo from "../Pages/CarritoAnonimo";
import Perfil from "../Pages/perfil";
import PerfilAnonimo from "../Pages/perfilAnonimo";
import editar from "../Pages/editar";
import Confirmar from "../Pages/confirmarDatos";
import Realizado from "../Pages/realizado";
import Registro from "../Pages/registro";
import RegistroC from "../Pages/registroCliente";
import RegistroT from "../Pages/registroTendero";
import ModificarProductos from "../Pages/modificarProductos";
import PerfilTendero from "../Pages/perfilTendero";
import AccederT from "../Pages/accederT";
import AccederC from "../Pages/accederC";

import Product from "../Pages/prod"; 
import Productos from "../Components/productos";




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />



        <Redirect from="/Inicio" to="/Inicio2" />
        <Route exact path="/inicio2" component={Inicio2} />
        <Route exact path="/inicio3" component={Inicio3} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/registroT" component={RegistroT} />
        <Route exact path="/registroC" component={RegistroC} />
        <Route exact path="/accederc" component={AccederC} />
        <Route exact path="/accederT" component={AccederT} />

        <Redirect from="/Inicio2" to="/Inicio" />
        <Route exact path="/tendero" component={Tendero} />
        <Route exact path="/cliente" component={Cliente} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/anonimo" component={anonimo} />
        <Route exact path="/CarritoAnonimo" component={CarritoAnonimo} />
        <Route exact path="/confirmar" component={Confirmar} />
        <Route exact path="/realizado" component={Realizado} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/perfilAnonimo" component={PerfilAnonimo} />
        <Route exact path="/perfilTendero" component={PerfilTendero} />
        <Route exact path="/editar" component={editar} />
        <Route exact path="/modificarProductos" component={ModificarProductos} />

        <Route exact path="/prod" component={Product} />
        <Route exact path="/prodPrueba" component={Productos} />
        <Route exact path="/prod" component={Product} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
