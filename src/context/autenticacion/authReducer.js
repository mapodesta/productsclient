import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  CERRAR_SESION,
} from "../../types/index";
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
    case CERRAR_SESION:
      localStorage.removeItem("token");
      return {
        ...state,
        autenticado: false,
        mensaje: action.payload,
        usuario: null,
        token: null,
        cargando: false,
      };

    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };
    default:
      return state;
  }
};
