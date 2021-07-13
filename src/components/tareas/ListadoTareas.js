import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(TareaContext);

  const { tareasProyecto } = tareasContext;

  if (!proyecto) return <h1>Selecciona un proyecto</h1>;

  const onClickEliminar = (proyecto) => {
    eliminarProyecto(proyecto[0]._id);
  };

  return (
    <Fragment>
      <h2>Proyecto:{proyecto[0].nombre}</h2>
      {tareasProyecto.length === 0 ? (
        <li className="tarea">No hay tareas</li>
      ) : (
        <TransitionGroup>
          {tareasProyecto.map((tarea) => (
            <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
              <Tarea tarea={tarea} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      <ul className="listado-tareas"></ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => onClickEliminar(proyecto)}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
