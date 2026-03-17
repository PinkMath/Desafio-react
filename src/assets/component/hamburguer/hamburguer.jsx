import { useState } from "react";
import "./hamburguer.css";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);

  return (
      <header className="header">
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir ou fechar menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu ${open ? "active" : ""}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
          <a href="#jogos" onClick={() => setOpen(false)}>Jogos</a>
          <a href="#programacao" onClick={() => setOpen(false)}>Programação</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        </nav>
        
        <h1>GeekHub</h1>
      </header>
    );
}
