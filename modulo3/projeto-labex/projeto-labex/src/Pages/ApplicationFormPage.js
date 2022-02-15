import React from "react";
import { useNavigate } from "react-router-dom";

const  ApplicationFormPage = () => {
  const navigate = useNavigate()

    const nextViagem = () => {
        navigate("/list")
    }

  return (
    <div>
        <h1>Increva-se para uma viagem</h1>
        <p>
          <button onClick={nextViagem}>Voltar</button>
          <button>Enviar</button>
        </p>
    </div>
  );
}

export default ApplicationFormPage;
