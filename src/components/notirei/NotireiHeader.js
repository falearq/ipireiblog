import React from "react";
import HeaderNotirei from '../../images/header-notirei.png'

const NotireiHeader = () => {
  return (
    <div>
      <div className="notirei-header">
        <img
          className="notirei-header-img"
          src={HeaderNotirei}
          alt="Notirei"
        ></img>
        <div className="notirei-header-text">
          <h1>Notirei</h1>
          <h2>Nuestras Noticias Más Recientes</h2>
        </div>
      </div>
    </div>
  );
};

export default NotireiHeader;
