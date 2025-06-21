import React, { useState } from "react";
import "./Inscricao.css";

const Inscricao = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("https://formspree.io", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setSuccess(true);
      event.target.reset();
    } else {
      alert("Algo deu erardo. Tente de novo.");
    }
  };

  return (
    <>
      <h1 className="inscricao-form-heading">Inscrição</h1>

      <h5 className="inscricao-instructin-message">
        Preencha o formulário baixo para inscrever a sua equipa no canmpeonato
        MANINGUE BOLA.
      </h5>
      <h5>Os campos com o asterístico (*) são obrigatórios de preencher.</h5>

      <div className="inscricao-form">
        {success ? (
          <p style={{ color: "green" }}>Obrigado pela sua mensagem!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">*Nome da Equipa:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Escreva o nome aquí..."
              required
            />
            <br />

            <label htmlFor="email">*E-mail da Equipa:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira o e-mail aquí..."
              required
            />
            <br />
            <label htmlFor="phone-number">Número de telefone:</label>
            <input
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="Insira o número de telefone da equipa aquí..."
            />
            <br />

            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Caso tenha alguma sugestão ou reclamação escreva-a aquí..."
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Inscricao;
