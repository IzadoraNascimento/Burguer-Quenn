import React from "react";
import Titulo from "../../imagens/titulo2.png";
import "./Menu.css";

function Menu() {
  return (
    <div className="containerMenu">
      <img className="titulo" src={Titulo}/>
      <section>
        <button>Café da Manhã</button>
        <button>Almoço e Janta</button>
      </section>
    </div>
  )
}

export default Menu;