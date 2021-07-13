import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";

import clienteAxios from "../../config/axios";

const TareaState = (props) => {
  const initialState = {
    tareasProyecto: [],
    errorTarea: false,
    tareaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/tareas/", {
        params: { proyecto },
      });

      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarTarea = async (tarea) => {
    try {
      const respuesta = await clienteAxios.post("/api/tareas", tarea);

      dispatch({
        type: AGREGAR_TAREA,
        payload: respuesta.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validarTarea = () =>
    dispatch({
      type: VALIDAR_TAREA,
    });

  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } });

      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = async (tarea) => {
    try {
      const respuesta = await clienteAxios.put(
        `/api/tareas/${tarea._id}`,
        tarea
      );

      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: respuesta.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TareaContext.Provider
      value={{
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
