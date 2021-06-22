import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";
import { v4 as uuidv4 } from 'uuid';

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 3,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 1 },
      { id: 5, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      {
        id: 7,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 8, nombre: "Elegir Hosting", estado: true, proyectoId: 1 },
      { id: 9, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 10, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 11,
        nombre: "Elegir Plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 12, nombre: "Elegir Hosting", estado: true, proyectoId: 1 },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaSeleccionada:null,
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    tarea.id=uuidv4()
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () =>
    dispatch({
      type: VALIDAR_TAREA,
    });

  const eliminarTarea = (id) =>
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = tarea =>
  dispatch({
    type:ACTUALIZAR_TAREA,
    payload:tarea,
  })

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada:state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
