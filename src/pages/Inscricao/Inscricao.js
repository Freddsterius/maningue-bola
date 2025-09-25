import React, { useState } from "react";
import "./Inscricao.css";
import PageHeading from "../../components/atoms/pageHeading/PageHeading";

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

  const [formData, setFormData] = useState({
    teamName: "",
    coachName: "",
    teamEmail: "",
    teamPhoneNumber: "",
    teamLocation: "",
  });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="inscricao-full-screen-container">
      <PageHeading headingName="Inscrição" />

      <div className="inscricao-instruction-message-container">
        <p>
          Preencha o formulário abaixo para inscrever a sua equipa no campeonato
          de futebol <span style={{ color: "red" }}>MANINGUE BOLA</span>.
        </p>

        <p>
          Nota: Os campos com o asterístico (*) são obrigatórios de preencher.
        </p>
      </div>

      <div className="inscricao-form-container">
        {success ? (
          <p style={{ color: "green" }}>Obrigado pela sua incrição!</p>
        ) : (
          <>
            <h1 className="inscricao-title">Inscreva a sua equipa</h1>

            <form className="inscricao-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="team-name">*Nome da Equipa:</label>
                <input
                  type="text"
                  id="team-name"
                  name="teamName"
                  placeholder="Escreva o nome da equipa aquí..."
                  value={formData.teamName}
                  onChange={changeHandler}
                  required
                />
                <p>You typed: {formData.teamName}</p>
                {formData.teamName === "" && (
                  <p style={{ color: "red" }}>⚠️ First Name is required!</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="coach-name">*Nome do Trainador:</label>
                <input
                  type="text"
                  id="coach-name"
                  name="coachName"
                  placeholder="Escreva o nome do trainador aquí..."
                  value={formData.coachName}
                  onChange={changeHandler}
                  required
                />
                <p>You typed: {formData.coachName}</p>
                {formData.coachName === "" && (
                  <p style={{ color: "red" }}>⚠️ First Name is required!</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="email">E-mail da Equipa:</label>
                <input
                  type="email"
                  id="team-email"
                  name="teamEmail"
                  placeholder="Escreva o e-mail da equipa aquí..."
                  value={formData.teamEmail}
                  onChange={changeHandler}
                  required
                />
                <p>You typed: {formData.teamEmail}</p>
                {formData.teamEmail === "" && (
                  <p style={{ color: "red" }}>⚠️ First Name is required!</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="phone-number">
                  *Número de telefone da equipa:
                </label>
                <input
                  type="tel"
                  id="team-phone-number"
                  name="teamPhoneNumber"
                  // placeholder="+258 80 12 34 567"
                  placeholder="Escreva o número de telefone da equipa aquí..."
                  inputMode="numeric"
                  value={formData.teamPhoneNumber}
                  onChange={changeHandler}
                  required
                />
                <p>You typed: {formData.teamPhoneNumber}</p>
                {formData.teamPhoneNumber === "" && (
                  <p style={{ color: "red" }}>⚠️ First Name is required!</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="team-location">*Localização da equipa:</label>
                <input
                  type="text"
                  id="team-location"
                  name="teamLocation"
                  placeholder="Escreva a localização  da equipa aquí..."
                  value={formData.teamLocation}
                  onChange={changeHandler}
                  required
                />
                <p>You typed: {formData.teamLocation}</p>
                {formData.teamLocation === "" && (
                  <p style={{ color: "red" }}>⚠️ First Name is required!</p>
                )}
              </div>

              <button type="submit" className="submit-button">
                Submeter
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Inscricao;

/*
  import React, { useState } from "react";
import "./newAccount.css";

const NewAccount = () => {

  return (




  );
};

export default NewAccount;

  */
