import React, { useContext } from "react";
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/ProyectoContext";
const Tarea = ({ tarea }) => {
  const tareaContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareaContext;

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const handleEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyecto[0].id);
  };

  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  const seleccionarTarea = tarea =>{

    guardarTareaActual(tarea)

  }
  return (
    <li className="tarea sombre">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={()=> seleccionarTarea(tarea)} >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
