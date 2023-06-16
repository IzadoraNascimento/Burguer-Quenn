import React from "react";
import Titulo from "../../imagens/titulo.png";

function Menu() {
  return (
    <div>
      <img className="titulo" src={Titulo}/>
      <button>Café da Manhã</button>
      <button>Almoço e Janta</button>
    </div>
  )
}

export default Menu;