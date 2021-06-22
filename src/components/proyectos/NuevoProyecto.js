import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);

  const {
    formulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
    errorFormulario,
  } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre } = proyecto;

  const onSubmitProyecto = (e) => {
    e.preventDefault();
    if (nombre === "") {
      mostrarError();
      return;
    }
    agregarProyecto(proyecto);
    guardarProyecto({
      nombre: "",
    });
  };

  const onClick = () => {
    mostrarFormulario();
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClick}
      >
        {" "}
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorFormulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
