/*
import "./App.css";
//import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
//import ReactPlayer from "react-player";

import Navbar from "./components/navbar/Navbar";
import Inicio from "./pages/inicio/Inicio";
import Noticias from "./pages/noticias/Noticias";
import Jogos from "./pages/jogos/Jogos";
import Tabela from "./pages/tabela/Tabela";
import Estatistica from "./pages/estatistica/Estatistica";
import Jogadores from "./pages/jogadores/Jogadores";
import Equipas from "./pages/equipas/Equipas";
import Contacto from "./pages/contacto/Contacto";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/tabela" element={<Tabela />} />
        <Route path="/estatistica" element={<Estatistica />} />
        <Route path="/jogadores" element={<Jogadores />} />
        <Route path="/equipas" element={<Equipas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
*/
/*
import { useState, useEffect, useRef } from "react";

import "./App.css";
//import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
//import ReactPlayer from "react-player";

import Navbar from "./components/navbar/Navbar";
import Inicio from "./pages/inicio/Inicio";
import Noticias from "./pages/noticias/Noticias";
import Jogos from "./pages/jogos/Jogos";
import Tabela from "./pages/tabela/Tabela";
import Estatistica from "./pages/estatistica/Estatistica";
import Jogadores from "./pages/jogadores/Jogadores";
import Equipas from "./pages/equipas/Equipas";
import Contacto from "./pages/contacto/Contacto";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavHeight(); // Set height on mount
    window.addEventListener("resize", updateNavHeight); // Update on resize

    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);
  return (
    <div className="App">
      <Navbar ref={navbarRef} />
      <main style={{ paddingTop: `${navHeight}px`, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/estatistica" element={<Estatistica />} />
          <Route path="/jogadores" element={<Jogadores />} />
          <Route path="/equipas" element={<Equipas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
*/

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"; // Import Navbar
import Inicio from "./pages/inicio/Inicio";
import Noticias from "./pages/noticias/Noticias";
import Jogos from "./pages/jogos/Jogos";
import Tabela from "./pages/tabela/Tabela";
import Estatistica from "./pages/estatistica/Estatistica";
import Jogadores from "./pages/jogadores/Jogadores";
import Equipas from "./pages/equipas/Equipas";
import Contacto from "./pages/contacto/Contacto";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/tabela" element={<Tabela />} />
        <Route path="/estatistica" element={<Estatistica />} />
        <Route path="/jogadores" element={<Jogadores />} />
        <Route path="/equipas" element={<Equipas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
