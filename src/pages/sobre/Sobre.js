import React from "react";
import "./Sobre.css";
import placeholderImg from "../../assets/images/hero/golden-ball.png";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <PageHeading headingName="Sobre" />

      <div className="sobre-container-text">
        <p>
          <span className="maning-bola">ManingueBola</span>, é um website amador
          criado por um estudante de "Desenvolvimento de Websites".
        </p>
        <p>
          O objectivo principal do website é abordar assuntos relacionados ao
          campeonato espanhol, mais conhecido como{" "}
          <a
            href="https://www.laliga.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>LaLiga</em>.
          </a>
        </p>
        <div className="img-container">
          <img src={placeholderImg} alt="logotipo de maningue bola" />
        </div>
      </div>

      {/* <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo velit
        nihil, obcaecati neque adipisci voluptas mollitia, nemo facilis quo
        numquam eaque totam id vel reprehenderit molestias laboriosam pariatur
        ex alias similique voluptate nulla amet? Libero, nobis architecto nihil
        eveniet quod obcaecati necessitatibus itaque odio illo aliquid deleniti
        incidunt, reiciendis, beatae quo magni magnam animi voluptatum illum
        accusamus! Pariatur provident perferendis adipisci magni eius dolorem
        cumque placeat suscipit et ab perspiciatis dolore assumenda, nisi ullam
        libero quod excepturi deleniti temporibus incidunt molestias similique.
        Quam, beatae tenetur. Ea sit eligendi optio qui sint nisi similique
        consequatur nulla delectus velit officia at aut blanditiis autem
        quibusdam ipsam cupiditate, iure quis cum asperiores voluptatem odit
        nesciunt adipisci modi? Reprehenderit voluptatibus perferendis alias
        dolor vitae ducimus, aliquam fugiat quos hic illum! Pariatur vel, dolore
        illo ab id modi voluptatem, dolor enim fugiat beatae similique aliquid
        ea quos eveniet aspernatur quisquam quaerat rem. Autem, eum ipsam?
      </div> */}
    </div>
  );
};

export default Sobre;
