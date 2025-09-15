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
        Preencha o formulário baixo para inscrever a sua equipa no campeonato de
        futebol <span style={{ color: "red" }}>MANINGUE BOLA</span>.
      </h5>
      <h5>Os campos com o asterístico (*) são obrigatórios de preencher.</h5>

      <div className="inscricao-form">
        {success ? (
          <p style={{ color: "green" }}>Obrigado pela sua mensagem!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="team-name">*Nome da Equipa:</label>
            <input
              type="text"
              id="team-name"
              name="team-name"
              placeholder="Escreva o nome da equipa aquí..."
              required
            />
            <br />
            <label htmlFor="coach-name">*Nome do Trainador:</label>
            <input
              type="text"
              id="coach-name"
              name="coach-name"
              placeholder="Escreva o nome do trainador aquí..."
              required
            />
            <br />
            <label htmlFor="email">E-mail da Equipa:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escreva o e-mail da equipa aquí..."
            />
            <br />
            <label htmlFor="phone-number">*Número de telefone da equipa:</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              /*pattern=""*/
              inputMode="numeric"
              placeholder="+258 80 12 34 567"
              /* placeholder="Escreva o número de telefone da equipa aquí..."*/
              required
            />
            <br />u
            <label htmlFor="team-location">*Localização da equipa:</label>
            <input
              type="text"
              id="team-location"
              name="team-location"
              placeholder="Escreva a localização  da equipa aquí..."
              required
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Inscricao;
