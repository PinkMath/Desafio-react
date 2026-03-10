import { useState } from "react";
import './hamburguer.css'

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const togglemenu = () => setOpen(!open) 

  return (
      <>
        <header>
            <button
              className={`hamburger ${open ? "open" : ""}`}
              onClick={togglemenu}
              aria-label="Abrir ou fechar menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`menu ${open ? "active" : ""}`}>
              <a href="#inicio">Inicio</a>
              <a href="#jogos">Jogos</a>
              <a href="#programacao">Programação</a>
              <a href="#contato">Contato</a>
            </nav>
        </header>
      </>
    );
}
