import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(TareaContext);

  const {
    agregarTarea,
    validarTarea,
    errorTarea,
    obtenerTareas,
    tareaSeleccionada,
    actualizarTarea,
  } = tareasContext;

  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      guardarTarea(tareaSeleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

  const { nombre } = tarea;

  if (!proyecto) return null;

  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    if (tareaSeleccionada === null) {
      tarea.proyecto = proyecto[0]._id;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
    }

    obtenerTareas(proyecto[0].id);
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            name={tareaSeleccionada ? "Guardar Cambios" : "Crear Tarea"}
            value={tareaSeleccionada ? "Guardar Cambios" : "Crear Tarea"}
          />
        </div>
      </form>
      {errorTarea ? (
        <p className="mensaje error">El nombre esta vacio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
