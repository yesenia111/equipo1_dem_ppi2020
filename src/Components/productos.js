import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import estilo from "../Styles/Componentes.css";
import monster from "../Images/Monster.png";
import añadirC from "../Images/añadirC.png";


 export default function Productos({NameProd}){

    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-12 ">
            <div class="card">
              <div class="card-body">
                
                <h1> Productos </h1>

                <ul>
                  {NameProd.map(names=>{
                    return <li>{names.Nombre} </li>

                  })}
                </ul>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

