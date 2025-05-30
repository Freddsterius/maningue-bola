import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "hide" : "show"}`}>
      <div className="logo">
        <img
          src={require("../../assets/images/golden-ball.png")}
          alt="logotipo de maninguebola"
          width={100}
        />
        <h5>maninguebola.vercel.app</h5>
      </div>

      {/* Hamburger toggle button */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close">✖</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>

      {/* Navigation menu */}
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/noticias" onClick={toggleMenu}>
            Noticias
          </Link>
        </li>
        <li>
          <Link to="/jogos" onClick={toggleMenu}>
            Jogos
          </Link>
        </li>
        <li>
          <Link to="/tabela" onClick={toggleMenu}>
            Tabela
          </Link>
        </li>
        <li>
          <Link to="/estatistica" onClick={toggleMenu}>
            Estatistica
          </Link>
        </li>
        <li>
          <Link to="/jogadores" onClick={toggleMenu}>
            Jogadores
          </Link>
        </li>
        <li>
          <Link to="/equipas" onClick={toggleMenu}>
            Equipas
          </Link>
        </li>
        <li>
          <Link to="/contacto" onClick={toggleMenu}>
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={toggleMenu}>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
