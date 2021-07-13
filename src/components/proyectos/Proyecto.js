import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);

  const tareasContext = useContext(TareaContext);

  const { proyectoActual } = proyectosContext;

  const { obtenerTareas } = tareasContext;

  const seleccionarProyecto = (id) => {
    proyectoActual(id);
    obtenerTareas(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
