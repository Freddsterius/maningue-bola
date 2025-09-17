import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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
      <Link to="/">
        <div className="logo">
          <img
            src={require("../../assets/images/hero/golden-ball.png")}
            alt="logotipo de maninguebola"
            width={100}
          />
          <h5>maninguebola.vercel.app</h5>
        </div>
      </Link>

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/noticias"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Noticias
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/jogos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Jogos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tabela"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Tabela
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/estatistica"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Estatistica
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/jogadores"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Jogadores
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/equipas"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Equipas
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/inscricao"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Inscricão
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={toggleMenu}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
