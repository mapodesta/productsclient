import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/autenticacion/AuthContext";
const Barra = () => {
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      <p className="nombre-usuario">
        hola<span>,{usuario?.nombre}</span>
      </p>
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesion
        </button>
      </nav>
    </header>
  );
};

export default Barra;
