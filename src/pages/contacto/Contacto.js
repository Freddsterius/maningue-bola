import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
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
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <h1 className="contact-form-heading">Contacto</h1>
      <p>
        * Preencha o formulário baixo para contactar o desenvolvedor deste
        website.
      </p>
      <div className="contact-form">
        {success ? (
          <p style={{ color: "green" }}>Obrigado pela sua mensagem!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Escreva o seu nome aquí..."
              required
            />
            <br />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira o seu e-mail aquí..."
              required
            />
            <br />

            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Escreva a sua mensagem aquí..."
              required
            ></textarea>
            <br />

            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Contacto;
