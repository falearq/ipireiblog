import React from "react";
import HeaderEventos from '../../images/header-eventos.png'

const EventosHeader = () => {
  return (
    <div>
      <div className="notirei-header">
        <img
          className="notirei-header-img"
          src={HeaderEventos}
          alt="Eventos"
        ></img>
        <div className="notirei-header-text">
          <h1>Eventos</h1>
          <h2>Calendario de Eventos Próximos</h2>
        </div>
      </div>
    </div>
  );
};

export default EventosHeader;