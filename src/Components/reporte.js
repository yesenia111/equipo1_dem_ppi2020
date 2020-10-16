import React from "react";

class Reporte extends React.Component {
  render() {
    return (
      <div className="reporte">
        <h6 class="titulos">Eliminar cuenta</h6>

        <input
          type="txt"
          id="eliminarPerfil"
          name="delete"
          Value="Escribe 'Eliminar cuenta'"
          className=""
        />

        <button type="button" class="btn" id="delete">
          Ok
        </button>

        <br />

        <h6 class="titulos">Reporta un error o envía una sugerencia</h6>

        <br />
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea> <button type="button" class="btn" id="delete">
        Enviar
      </button>
        <br />
      </div>
    );
  }
}

export default Reporte;
